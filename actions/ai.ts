"use server"
const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

import db from "@/utils/db";
import Query from "@/models/query";

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export async function runAi(text: string) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(text);
    console.log(result.response.text());
  
    return result.response.text();
}

export async function saveQuery(
  template: object,
  email: string,
  query: string,
  content: string
) {
  try {
    await db();
    const newQuery = new Query({template, email, query, content, });
    await newQuery.save();
  } catch(err) {
    return {ok: false}
  }
}

export async function getQueries(email:string, page: number, pageSize: number) {
  try {
    await db();
    const skip = (page - 1) * pageSize;
    const totalQueries = await Query.countDocuments({email});
    const queries = await Query.find({ email })
      .sort({ createdAt: -1 }) 
      .skip(skip)
      .limit(pageSize)
      .lean();

    return {
      queries,
      totalPages: Math.ceil(totalQueries / pageSize),
    }
  } catch (err) {
    return {
      ok: false,
    }
  }
}

export async function usageCount(email: string) {
  await db();

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  const result = await Query.aggregate([
    {
      $match: {
        email: email,
        $expr: {
          $and: [
            { $eq: [{ $year: "$createdAt" }, currentYear] },
            { $eq: [{ $month: "$createdAt" }, currentMonth] },
          ],
        },
      },
    },
    {
      $project: {
        wordCount: {
          $size: {
            $split: [{ $trim: { input: "$content" } }, " "],
          },
        },
      },
    },
    {
      $group: {
        _id: null,
        totalWords: { $sum: "$wordCount" },
      },
    },
  ]);

  return result.length > 0 ? result[0].totalWords : 0;
}
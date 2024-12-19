"use client";
import { useState } from "react";
import template from "@/utils/template";
import Image from "next/image";
import { Search } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";

export default function Page() {
  const [search, setSearch] = useState("");

  const filteredTemplates = template.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-screen-xl mx-auto p-5">
      <div className="p-6 mb-5 bg-slate-200 dark:bg-slate-800 rounded-lg flex flex-col justify-center items-center shadow-md">
        <h1 className="text-2xl font-semibold">What would you like help creating?</h1>

        <div className="w-full flex justify-center mt-5">
          <div className="flex gap-2 items-center p-2 border border-gray-300 dark:border-gray-700 shadow-lg rounded-md bg-transparent w-full md:w-[60%] lg:w-[50%]">
            <Search className="text-primary" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent w-full outline-none text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map((item) => (
          <Link key={item.slug} href={`/dashboard/template/${item.slug}`}>
            <div className="p-5 bg-white shadow-md rounded-md border flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all min-h-[250px]">
              <div className="flex justify-center items-center">
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <h2 className="font-medium text-lg text-center">{item.name}</h2>
              <p className="text-gray-500 line-clamp-3 flex-grow">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

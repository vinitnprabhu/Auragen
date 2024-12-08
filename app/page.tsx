"use client"

import {runAi} from "@/actions/ai"
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Card, CardHeader, CardContent} from "@/components/ui/card";
import ReactMarkdown from 'react-markdown';

export default function Page() {

  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  const handleClick = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try{
      const data = await runAi(query);
      setResponse(data);
    } catch(err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div>
      <form onSubmit={handleClick}>
        <Input className="mb-5" placeholder="Ask me anything" value={query} onChange={e => setQuery(e.target.value)}/>
        <Button>Generate</Button>
      </form>
      <Card className="mt-5">
        <CardContent>
          AI Response
        </CardContent>
        <CardContent>
          {loading ? <div>Loading...</div> : <ReactMarkdown>{response}</ReactMarkdown> }
        </CardContent>
      </Card>
    </div>
  )
}
import React from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: 'url("/background.jpg")',
        height: "50vh",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#010818] z-0"></div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          <Image
            src="/home-logo.png" 
            alt="Company Logo"
            width={400} 
            height={50} 
            className="mx-auto" // Center the image horizontally
          />
          <p className="text-white mb-5">
            Generate AI content for your blog, website, or social media with a
            single click and more
          </p>
          <Link href="/dashboard">
            <Button variant="outline">Get started</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

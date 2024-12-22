import React from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Card from "@/components/cards/landing-page";

export default function Home() {
  return (
    <>
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
              <Button className="transform transition-transform hover:scale-105 hover:shadow-2xl" style={{ backgroundColor: 'black', color: 'white', borderWidth: '1px' }}>
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="py-10 px-4">
        <div className="max-w-full mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:px-0 lg:px-0">
            <Card
              title="Content Optimized for SEO"
              description="Create content designed to boost your blog or website's search engine rankings."
              link="/dashboard"
            />

            <Card
              title="Engaging Social Media Content"
              description="Craft compelling posts to enhance your social media presence effortlessly."
              link="/dashboard"
            />

            <Card
              title="AI-Powered Content Creation"
              description="Produce high-quality AI-generated content for blogs, websites, and social platforms in one click."
              link="/dashboard"
            />

            <Card
              title="Code Snippets and Solutions"
              description="Access programming tools to generate, optimize, and debug code efficiently."
              link="/dashboard"
            />
          </div>
        </div>
      </div>

      <footer className="py-4 text-center border-t-2">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Auragen. Created by Vinit Prabhu.
        </p>
      </footer>
    </>
  );
}

import React from "react";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, description, link }) => {
  return (
    <Link href={link}>
      <div className="relative flex flex-col items-center justify-start p-6 border rounded-lg bg-opacity-80 border-gray-600 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-[#010818] to-[#003366] h-80">
        <h3 className="text-lg font-semibold mb-6 text-white text-center pt-12">{title}</h3>
        <p className="text-gray-400 mb-4 text-center">{description}</p>
      </div>
    </Link>
  );
};

export default Card;

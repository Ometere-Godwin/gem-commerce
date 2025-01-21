import React from "react";
interface BaseTextProps {
  title?: string;
  description?: string;
}

export default function BaseText({ title, description }: BaseTextProps) {
  return (
    <div className="flex flex-col md:gap-y-8 gap-y-8">
      <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
      <p className="text-sm md:text-sm">{description}</p>
    </div>
  );
}

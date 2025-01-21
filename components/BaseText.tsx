import React from "react";
interface BaseTextProps {
  title?: string;
  description?: string;
}

export default function BaseText({ title, description }: BaseTextProps) {
  return (
    <div className="flex flex-col">
      <h1 className="">{title}</h1>
      <p>{description}</p>
    </div>
  );
}

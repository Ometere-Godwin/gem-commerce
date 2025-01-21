import React from "react";
import Container from "./Container";
import Image from "next/image";
import twoDogs from "../public/assets/twoDogs.svg";
import nuts from "../public/assets/nuts.svg";
import BaseText from "./BaseText";

export default function TwoDogs() {
  return (
    <div className="flex flex-col bg-white py-8">
      <Container>
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 mb-10">
          <div className="w-full md:w-1/2">
            <Image src={twoDogs} alt="Two dogs" className="w-full h-auto" />
          </div>

          <div className="flex items-center w-full md:w-1/2">
            <BaseText
              title="Improve overall gastrointestinal health for better nutrient absorption"
              description="Through rigorous scientific studies and consultations with veterinarians, we have created a breakthrough formula exclusively tailored to combat the health challenges prevalent in dogs. A staggering 91% of our customers have reported significant improvements in their dogs' health after incorporating our product into their diet."
            />
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-10">
          <div className="flex items-center w-full md:w-1/2">
            <BaseText
              title="Improve overall gastrointestinal health for better nutrient absorption"
              description="Through rigorous scientific studies and consultations with veterinarians, we have created a breakthrough formula exclusively tailored to combat the health challenges prevalent in dogs. A staggering 91% of our customers have reported significant improvements in their dogs' health after incorporating our product into their diet."
            />
          </div>

          <div className="w-full md:w-1/2">
            <Image src={nuts} alt="Two dogs" className="w-full h-auto" />
          </div>
        </div>
      </Container>
    </div>
  );
}

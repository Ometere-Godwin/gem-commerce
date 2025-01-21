import React from "react";
import Container from "./Container";
import Image from "next/image";
import happyDog from "../public/assets/happyDog.svg";

export default function NutritionFoundation() {
  return (
    <div className="bg-[#F8F8F8] min-h-screen md:min-h-[80vh]">
      <Container className="">
        <div className="flex flex-col md:flex-row gap-10 py-8 md:py-16">
          <div className="flex flex-col flex-1 gap-y-8 md:gap-y-8">
            <h1 className="text-2xl md:text-3xl font-bold">
              Nutrition is the foundation for longer, healthier lives in dogs.
            </h1>
            <p className="text-sm md:text-sm">
              Invest in your dog&apos;s future with our scientifically
              formulated superfood-powered supplements. Give them the nutrition
              they deserve and watch them thrive with vitality, energy, and the
              joy of a longer, healthier life.
            </p>

            <div className="flex flex-col gap-3 md:gap-6">
              <p className="font-semibold">Key Points:</p>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-5">
                <span className="text-xl md:text-2xl font-bold text-[#EE6F4B]">
                  97%
                </span>
                <div>
                  <p className="text-sm md:text-sm">
                    Dogs choose our dog food over leading brands because of its
                    real functional ingredients and delicious flavor.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-5">
                <span className="text-xl md:text-2xl font-bold text-[#EE6F4B]">
                  84%
                </span>
                <div>
                  <p className="text-sm md:text-sm">
                    Our dog food provides superior nutrition and a patented
                    probiotic for optimal nutrient absorption.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-5">
                <span className="text-xl md:text-2xl font-bold text-[#EE6F4B]">
                  92%
                </span>
                <div>
                  <p className="text-sm md:text-sm">
                    Our dog food&apos;s high protein and fat digestibility
                    contribute to ideal stool quality.
                  </p>
                </div>
              </div>
            </div>
            <button className="bg-[#EE6F4B] text-white px-6 md:px-10 py-3 rounded-[6px] w-full md:w-auto text-sm md:text-sm">
              Give your furry friend the gift of wholesome nutrition
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <Image
              src={happyDog}
              alt="Happy dog"
              className="w-full h-auto max-w-[500px]"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

import React, { JSX } from "react";
import Container from "./Container";
import Image from "next/image";
import realFood from "../public/icons/realFood.svg";
import food from "../public/assets/food.svg";
import premium from "../public/icons/premium.svg";
import madeFresh from "../public/icons/madeFresh.svg";
import vetDeveloped from "../public/icons/vetDeveloped.svg";

export default function DogHealthyMeal(): JSX.Element {
  return (
    <div className="bg-white">
      <Container className="">
        <div className="flex items-center justify-center flex-col gap-y-10 py-8">
          <h1 className="text-center font-bold text-2xl md:text-[40px] w-[90%] md:w-1/2">
            What makes us different makes them stronger
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-5">
            {/* Left hand side */}
            <div className="flex flex-col gap-5 w-full md:w-auto">
              <div className="flex items-center gap-5">
                <Image src={realFood} alt="real food" />
                <div>
                  <h1 className="text-sm font-bold text-[#161723]">
                    Real food
                  </h1>
                  <h2 className="text-[#424153] text-sm">
                    Wholesome recipes for dogs with real meat and veggies.
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <Image src={premium} alt="real food" />
                <div>
                  <h1 className="text-sm font-bold text-[#161723]">
                    Premium Ingredient
                  </h1>
                  <h2 className="text-[#424153] text-sm">
                    Elevating pet care with unmatched safety and quality.
                  </h2>
                </div>
              </div>
            </div>

            {/* Center */}
            <div className="w-[80%] md:w-auto">
              <Image src={food} alt="food" className="w-full h-auto" />
            </div>

            {/* Right side */}
            <div className="flex flex-col gap-5 w-full md:w-auto">
              <div className="flex items-center gap-5">
                <Image src={madeFresh} alt="real food" />
                <div>
                  <h1 className="text-sm font-bold text-[#161723]">
                    Made Fresh
                  </h1>
                  <h2 className="text-[#424153] text-sm">
                    We prioritize maintaining the integrity of whole foods and
                    nutrition.
                  </h2>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <Image src={vetDeveloped} alt="real food" />
                <div>
                  <h1 className="text-sm font-bold text-[#161723]">
                    Vet Developed
                  </h1>
                  <h2 className="text-[#424153] text-sm">
                    We raise the bar for dog nutrition, surpassing industry
                    expectations.
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <button className="bg-[#EE6F4B] text-white rounded-[6px] px-6 md:px-[70px] py-3 text-sm w-full md:w-auto">
            Get your dog&apos;s healthy meal today
          </button>
          <div className="flex flex-col md:flex-row items-center gap-5 w-full justify-center">
            <Image
              src={"/icons/tick.svg"}
              alt="tick"
              height={150}
              width={150}
              className="w-[100px] md:w-[150px] h-auto"
            />

            <div className="flex gap-2 flex-wrap justify-center">
              <Image
                src={"/assets/payPal.png"}
                alt=""
                height={30}
                width={35}
                className="h-6 w-auto"
              />
              <Image
                src={"/assets/visa.png"}
                alt=""
                height={24}
                width={39.2}
                className="h-6 w-auto"
              />
              <Image
                src={"/assets/masterCard.png"}
                alt=""
                height={30}
                width={35}
                className="h-6 w-auto"
              />
              <Image
                src={"/assets/applePay.png"}
                alt=""
                height={30}
                width={35}
                className="h-6 w-auto"
              />
              <Image
                src={"/assets/gPay.png"}
                alt=""
                height={30}
                width={35}
                className="h-6 w-auto"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

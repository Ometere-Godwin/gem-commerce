import DogHealthyMeal from "@/components/DogHealthyMeal";
import NutritionFoundation from "@/components/NutritionFoundation";
import TwoDogs from "@/components/TwoDogs";

export default function Home() {
  return (
    <div className="flex flex-col">
      <DogHealthyMeal />
      <NutritionFoundation />
      <TwoDogs />
    </div>
  );
}

import React from "react";
import HeroSlider from "../../../UI/HeroSlider";

const PerformanceHero: React.FC = () => {
  const HeroData = [
    { imageURL: "performance.webp", text: "sing", tag: "sing", category: "sing"},
    { imageURL: "chess.webp", text: "play", tag: "sing", category: "sing" },
  ];
  return <HeroSlider slideData={HeroData} />;
};

export default PerformanceHero;

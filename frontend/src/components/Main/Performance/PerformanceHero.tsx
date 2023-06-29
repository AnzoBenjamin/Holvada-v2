import React from "react";
import classes from "./PerformanceHero.module.scss";
import HeroSlider from "../../../UI/HeroSlider";

const PerformanceHero = () => {
  const HeroData = [
    { imageURL: "performance.webp", text: "sing", tag: "sing", category: "sing"},
    { imageURL: "chess.webp", text: "play", tag: "sing", category: "sing" },
  ];
  return <HeroSlider slideData={HeroData} />;
};

export default PerformanceHero;

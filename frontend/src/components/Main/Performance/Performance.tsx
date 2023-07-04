import React from "react";
import Header from "../../Header/Header";
import PerformanceHero from "./PerformanceHero";
import classes from "./Performance.module.scss";
import { secondaryAnimationStart } from "../../../utils/animation";
import Footer from "../../Footer/Footer";

const Performance: React.FC = () => {
  const navItems = ["Home", "Upcoming", "Gallery", "Bookings"];
  const navLinks = [
    "section-home",
    "section-upcoming",
    "section-gallery",
    "section-bookings",
  ];

  return (
    <React.Fragment>
      <Header
        HeroElement={PerformanceHero}
        navHeading="Performance"
        navItems={navItems}
        navLinks={navLinks}
        otherClasses={classes.hero}
        animationStart={secondaryAnimationStart}
      />
      <Footer />
    </React.Fragment>
  );
};

export default Performance;

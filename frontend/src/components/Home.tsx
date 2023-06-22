import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import Hero from "./Header/Hero";
import classes from './Home.module.scss'

const Home = () => {
  const navItems = ["Home", "How to", "Services", "Pricing"];
  const navLinks = [
    "section-home",
    "section-guide",
    "section-services",
    "section-prices",
  ];

  return (
    <React.Fragment>
      <Header
        HeroElement={Hero}
        navItems={navItems}
        navLinks={navLinks}
        navHeading="Holvada"
        otherClasses={classes.hero}
      />
      <Main />
      <Footer />
    </React.Fragment>
  );
};

export default Home;

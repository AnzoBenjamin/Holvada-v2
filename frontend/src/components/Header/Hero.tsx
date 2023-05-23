import React from "react";
import styles from "../../scss/utils/_helpers.module.scss";
import classes from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={classes.hero}>
        <div className={classes['hero__heading-are']}>

      <h3 className={styles["heading-tertiary"]}>Welcome</h3>
      <h1 className={styles["heading-primary"]}>
        Where design meets development
      </h1>
        </div>
      <div className={classes['hero__text-area']}>
        <p>Choose the best</p>
        <p>Choose Holvada</p>
      </div>
      <img
        src="/hero-img.png"
        alt="Guy with gadgets"
        className={classes["hero-img"]}
      />
    </div>
  );
};

export default Hero;

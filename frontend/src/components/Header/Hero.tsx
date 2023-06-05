import styles from "../../scss/utils/_helpers.module.scss";
import classes from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <div className={classes["hero__heading-area"]}>
        <h3 className={styles["heading-tertiary"]}>Welcome</h3>
        <h1 className={styles["heading-primary"]}>
          Where design meets development
        </h1>
      </div>
      <div className={classes["hero__text-area"]}>
        <p>Choose the best</p>
      </div>
      <video className={classes["hero-video"]} autoPlay muted loop>
        <source src='/code-video.mp4' type='video/mp4'/>
      </video>
    </div>
  );
};

export default Hero;

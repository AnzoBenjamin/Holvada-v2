import styles from "../../scss/utils/_helpers.module.scss";
import classes from "./Hero.module.scss";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { animationStart, reveal } from "../../utils/animation";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <motion.div
        layout
        initial={{ height: 0 }}
        animate={{ height: "unset" }}
        transition={{ delay: animationStart, duration: 1 }}
        className={classes["hero-content"]}
      >
        <motion.div
          variants={reveal}
          initial="hiddenVariant"
          animate="revealVariant"
          transition={{ delay: animationStart + 1, duration: 0.5 }}
        >
          <h1 className={styles["heading-primary"]}>
            Empowering innovation through technology
          </h1>
        </motion.div>
        <motion.div
          variants={reveal}
          initial="hiddenVariant"
          animate="revealVariant"
          transition={{ delay: animationStart + 1.2, duration: 0.5 }}
        >
          <div className={classes["hero__text-area"]}>
            <p>
              Join us on a transformative journey where creativity meets
              cutting-edge technology, and let's bring your ideas to life.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={reveal}
          initial="hiddenVariant"
          animate="revealVariant"
          transition={{ delay: animationStart + 1.3, duration: 0.5 }}
          className={classes["hero__btn-area"]}
        >
          <Link smooth to=""  className={classes["btn-primary"]}>
            Start Learning
          </Link>
          <Link smooth to=""  className={classes["btn-secondary"]}>
            Learn more
          </Link>
        </motion.div>
      </motion.div>
      <div className={classes["video-container"]}>
        <video className={classes["hero-video"]} autoPlay muted loop>
          {window.innerWidth < 768 ? (
            <source src="/hero-mobile.mp4" type="video/mp4" />
          ) : (
            <source src="/hero.mp4" type="video/mp4" />
          )}
        </video>
      </div>
    </div>
  );
};

export default Hero;

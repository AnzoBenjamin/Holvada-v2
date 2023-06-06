import styles from "../../scss/utils/_helpers.module.scss";
import classes from "./Hero.module.scss";
import { motion } from "framer-motion";
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
            discover, learn and create with us
          </h1>
        </motion.div>
        <motion.div
          variants={reveal}
          initial="hiddenVariant"
          animate="revealVariant"
          transition={{ delay: animationStart + 1.2, duration: 0.5 }}
        >
          <div className={classes["hero__text-area"]}>
            <p>We are dedicated to turning your ideas into captivating and functional online experiences. With a team of experienced professionals, we bring together the best of design and technology to create powerful web solutions that drive business growth.</p>
          </div>
        </motion.div>
      </motion.div>
      <div className={classes["video-container"]}>
        <video className={classes["hero-video"]} autoPlay muted loop>
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Hero;

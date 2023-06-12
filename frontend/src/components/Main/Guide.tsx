import classes from "./Guide.module.scss";
import styles from "../../scss/utils/_helpers.module.scss";

const Guide = () => {
  return (
    <section className={classes["section-guide"]}>
      <h3 className={styles["heading-tertiary"]}>How To</h3>
      <h2 className={styles["heading-secondary"]}>You only need three steps</h2>
      <div className={classes.steps}>
        <div className={classes["steps--one"]}>
          <div className="step-text-box">
            <p className="step-number">01</p>
            <h3 className="heading-tertiary">
              Tell us what you like (and what not)
            </h3>
            <p className="step-description">
              Never again waste time thinking about what to eat! Omnifood AI
              will create a 100% personalized weekly meal plan just for you. It
              makes sure you get all the nutrients and vitamins you need, no
              matter what diet you follow!
            </p>
          </div>
          <div className="step-img-box">
            <img
              src="./img/app/app-screen-1.webp"
              className="step-img"
              alt="IPhone app preferences selection screen"
            />
          </div>
        </div>

        <div className={classes["steps--two"]}>
          <div className="step-text-box">
            <p className="step-number">01</p>
            <h3 className="heading-tertiary">
              Tell us what you like (and what not)
            </h3>
            <p className="step-description">
              Never again waste time thinking about what to eat! Omnifood AI
              will create a 100% personalized weekly meal plan just for you. It
              makes sure you get all the nutrients and vitamins you need, no
              matter what diet you follow!
            </p>
          </div>
          <div className="step-img-box">
            <img
              src="./img/app/app-screen-1.webp"
              className="step-img"
              alt="IPhone app preferences selection screen"
            />
          </div>
        </div>

        <div className={classes["steps--three"]}>
          {" "}
          <div className="step-text-box">
            <p className="step-number">01</p>
            <h3 className="heading-tertiary">
              Tell us what you like (and what not)
            </h3>
            <p className="step-description">
              Never again waste time thinking about what to eat! Omnifood AI
              will create a 100% personalized weekly meal plan just for you. It
              makes sure you get all the nutrients and vitamins you need, no
              matter what diet you follow!
            </p>
          </div>
          <div className="step-img-box">
            <img
              src="./img/app/app-screen-1.webp"
              className="step-img"
              alt="IPhone app preferences selection screen"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;

import classes from "./Guide.module.scss";
import styles from "../../scss/utils/_helpers.module.scss";

const Guide = () => {
  return (
    <section className={classes["section-guide"]}>
      <h3 className={styles["heading-tertiary"]}>How To</h3>
      <h2 className={styles["heading-secondary"]}>You only need three steps</h2>
      <div className={classes.steps}>
        <div className={classes["steps--one"]}>
          <div className={classes["step-text-box"]}>
            <p className={classes["step-number"]}>01</p>
            <h3 className={classes["heading-tertiary"]}>
              Tell us what you like (and what not)
            </h3>
            <p className={classes["step-description"]}>
              Never again waste time thinking about what to eat! Omnifood AI
              will create a 100% personalized weekly meal plan just for you. It
              makes sure you get all the nutrients and vitamins you need, no
              matter what diet you follow!
            </p>
          </div>
          <div className={classes["step-img-box"]}>
            <img
              src="/join.png"
              className={classes["step-img"]}
              alt="IPhone app preferences selection screen"
            />
          </div>
        </div>

        <div className={classes["steps--two"]}>
          <div className={classes["step-text-box"]}>
            <p className={classes["step-number"]}>01</p>
            <h3 className="heading-tertiary">
              Tell us what you like (and what not)
            </h3>
            <p className={classes["step-description"]}>
              Never again waste time thinking about what to eat! Omnifood AI
              will create a 100% personalized weekly meal plan just for you. It
              makes sure you get all the nutrients and vitamins you need, no
              matter what diet you follow!
            </p>
          </div>
          <div className={classes["step-img-box"]}>
            <img
              src="/join.png"
              className={classes["step-img"]}
              alt="IPhone app preferences selection screen"
            />
          </div>
        </div>

        <div className={classes["steps--three"]}>
          <div className={classes["step-text-box"]}>
            <p className={classes["step-number"]}>01</p>
            <h3 className="heading-tertiary">
              Tell us what you like (and what not)
            </h3>
            <p className={classes["step-description"]}>
              Never again waste time thinking about what to eat! Omnifood AI
              will create a 100% personalized weekly meal plan just for you. It
              makes sure you get all the nutrients and vitamins you need, no
              matter what diet you follow!
            </p>
          </div>
          <div className={classes["step-img-box"]}>
            <img
              src="/join.png"
              className={classes["step-img"]}
              alt="IPhone app preferences selection screen"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;

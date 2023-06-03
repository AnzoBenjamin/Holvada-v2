import classes from "./Services.module.scss";
import styles from "../../scss/utils/_helpers.module.scss";

const Services = () => {
  return (
    <section className={classes["section-services"]} id="section-services">
      <h3 className={styles["heading-tertiary"]}>Services</h3>
      <h2 className={styles["heading-secondary"]}>What we offer</h2>
      <div className={classes["section-services__area"]}>
        <div className={classes["section-services__area--item"]}>
          <figure className={classes["section-services__area--figure"]}>
            <div>
              <img
                src="/code.jpg"
                alt=""
                className={classes["section-services-img"]}
              />
            </div>
            <figcaption className={classes["section-services-img__heading"]}>
              DEVELOPMENT
            </figcaption>
          </figure>
          <p>
            We create apps that meet your specific business objectives. Our team
            leverages the latest technologies, frameworks, and industry best
            practices to ensure seamless functionality, intuitive user
            interfaces, and optimal performance.
          </p>
          <a href="#" className={classes.btn}>
            Learn more
          </a>
        </div>
        <div className={classes["section-services__area--item"]}>
          <figure className={classes["section-services__area--figure"]}>
            <div>
              <img
                src="/music.jpg"
                alt=""
                className={classes["section-services-img"]}
              />
            </div>
            <figcaption className={classes["section-services-img__heading"]}>
              SKILLING
            </figcaption>
          </figure>
          <p>
            We excel in creating dynamic, responsive, and feature-rich websites
            that leave a lasting impression. Our web development experts are
            proficient in both frontend and backend technologies, ensuring
            seamless functionality and an exceptional user experience.{" "}
          </p>
          <a href="#" className={classes.btn}>
            Learn more
          </a>
        </div>
        <div className={classes["section-services__area--item"]}>
          <figure className={classes["section-services__area--figure"]}>
            <div className={classes["image-container"]}>
              <img
                src="/design.jpg"
                alt=""
                className={classes["section-services-img"]}
              />
            </div>
            <figcaption className={classes["section-services-img__heading"]}>
              GRAPHICS DESIGN
            </figcaption>
          </figure>
          <p>
            Whether you need a captivating logo, eye-catching marketing
            materials, or a complete brand identity overhaul, we tailor our
            designs to reflect your unique vision and help your business stand
            out in a competitive market.
          </p>
          <a href="#" className={classes.btn}>
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

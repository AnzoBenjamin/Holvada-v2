import React, { useState } from "react";
import classes from "./Services.module.scss";
import styles from "../../scss/utils/_helpers.module.scss";
import Button from "../../UI/Button";

const SecondRow = () => {
  return (
    <React.Fragment>
      <div className={classes["section-services__area--item"]}>
        <figure className={classes["section-services__area--figure"]}>
          <div className={`${classes["image-container"]} ${classes.design}`}>
            &nbsp;
            <figcaption>
              <span className={classes["section-services-img__heading"]}>
                DESIGN
              </span>
            </figcaption>
          </div>
        </figure>
        <ul className={classes.list}>
          <li className={classes["list-item"]}>
            <span>Logos</span>
          </li>
          <li className={classes["list-item"]}>
            <span>Posters and fliers</span>
          </li>
          <li className={classes["list-item"]}>
            <span>UI/UX</span>
          </li>
          <li className={classes["list-item"]}></li>
        </ul>
      </div>


      <div className={classes["section-services__area--item"]}>
  <figure className={classes["section-services__area--figure"]}>
    <div className={`${classes["image-container"]} ${classes.art}`}>
      &nbsp;
      <figcaption>
        <span className={classes["section-services-img__heading"]}>ART</span>
      </figcaption>
    </div>
  </figure>
  <ul className={classes.list}>
    <li className={classes["list-item"]}>
      <span>Logos</span>
    </li>
    <li className={classes["list-item"]}>
      <span>Posters and fliers</span>
    </li>
    <li className={classes["list-item"]}>
      <span>UI/UX</span>
    </li>
    <li className={classes["list-item"]}></li>
  </ul>
</div>;
    </React.Fragment>
  );
};
const Services = () => {
  const buttonHandler = () => {};
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className={classes["section-services"]} id="section-services">
      <h3 className={styles["heading-tertiary"]}>Services</h3>
      <h2 className={styles["heading-secondary"]}>What we offer</h2>
      <div className={classes["section-services__area"]}>
        <div className={classes["section-services__area--item"]}>
          <figure className={classes["section-services__area--figure"]}>
            <div className={`${classes["image-container"]} ${classes.code}`}>
              &nbsp;
              <figcaption>
                <span className={classes["section-services-img__heading"]}>
                  CODE
                </span>
              </figcaption>
            </div>
          </figure>
          <ul className={classes.list}>
            <li className={classes["list-item"]}>
              <span>Logos</span>
            </li>
            <li className={classes["list-item"]}>
              <span>Posters and fliers</span>
            </li>
            <li className={classes["list-item"]}>
              <span>UI/UX</span>
            </li>
            <li className={classes["list-item"]}></li>
          </ul>
        </div>
        <div className={classes["section-services__area--item"]}>
          <figure className={classes["section-services__area--figure"]}>
            <div className={`${classes["image-container"]} ${classes.art}`}>
              &nbsp;
              <figcaption>
                <span className={classes["section-services-img__heading"]}>
                  ART
                </span>
              </figcaption>
            </div>
          </figure>
          <ul className={classes.list}>
            <li className={classes["list-item"]}>
              <span>Logos</span>
            </li>
            <li className={classes["list-item"]}>
              <span>Posters and fliers</span>
            </li>
            <li className={classes["list-item"]}>
              <span>UI/UX</span>
            </li>
            <li className={classes["list-item"]}></li>
          </ul>
        </div>
        <div className={classes["section-services__area--item"]}>
        <figure className={classes["section-services__area--figure"]}>
          <div className={`${classes["image-container"]} ${classes.language}`}>
            &nbsp;
            <figcaption>
              <span className={classes["section-services-img__heading"]}>
                LANGUAGE
              </span>
            </figcaption>
          </div>
        </figure>
        <ul className={classes.list}>
          <li className={classes["list-item"]}>
            <span>Logos</span>
          </li>
          <li className={classes["list-item"]}>
            <span>Posters and fliers</span>
          </li>
          <li className={classes["list-item"]}>
            <span>UI/UX</span>
          </li>
          <li className={classes["list-item"]}></li>
        </ul>
      </div>
        ;
        {isExpanded ? (
          <SecondRow />
        ) : (
          <Button text="Show more" onClick={buttonHandler} />
        )}
      </div>
    </section>
  );
};

export default Services;

import React, { useState } from "react";
import classes from "./Services.module.scss";
import styles from "../../scss/utils/_helpers.module.scss";
import Button from "../../UI/Button";

interface SecondRowProps {
  setHidden: (arg: boolean)=>void;
}

const SecondRow: React.FC<SecondRowProps> = ({setHidden}) => {

  const hideHandler = ()=>{
    setHidden(false)
  }

  return (
    <React.Fragment>
      <div className={classes["section-services__area--item"]}>
        <figure className={classes["section-services__area--figure"]}>
          <div className={`${classes["image-container"]} ${classes.music}`}>
            &nbsp;
            <figcaption>
              <span className={classes["section-services-img__heading"]}>
                MUSIC
              </span>
            </figcaption>
          </div>
        </figure>
        <ul className={classes.list}>
          <li className={classes["list-item"]}>
            <span>Theory</span>
          </li>
          <li className={classes["list-item"]}>
            <span>Vocal training</span>
          </li>
          <li className={classes["list-item"]}>
            <span>Instruments (Guitar, Piano, Violin)</span>
          </li>
          <li className={classes["list-item"]}></li>
        </ul>
      </div>
      <Button text="Show less" onClick={hideHandler} className={classes["show-less"]}/>
    </React.Fragment>
  );
};
const Services = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const buttonHandler = () => {
    setIsExpanded(true);
  };

  return (
    <section className={classes["section-services"]} id="section-services">
      <h3 className={styles["heading-tertiary"]}>Services</h3>
      <h2 className={styles["heading-secondary"]}>Find something for everyone with our wide collection</h2>
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
              <span>Mobile development</span>
            </li>
            <li className={classes["list-item"]}>
              <span>Frontend development</span>
            </li>
            <li className={classes["list-item"]}>
              <span>Backend Development</span>
            </li>
            <li className={classes["list-item"]}>Software as a service</li>
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
              <span>Painting</span>
            </li>
            <li className={classes["list-item"]}>
              <span>Pencil drawings</span>
            </li>
            <li className={classes["list-item"]}>
              <span>Sculptures</span>
            </li>
            <li className={classes["list-item"]}></li>
          </ul>
        </div>
        <div className={classes["section-services__area--item"]}>
          <figure className={classes["section-services__area--figure"]}>
            <div
              className={`${classes["image-container"]} ${classes.language}`}
            >
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
              <span>English</span>
            </li>
            <li className={classes["list-item"]}>
              <span>French</span>
            </li>
            <li className={classes["list-item"]}>
              <span>Kiswahili</span>
            </li>
            <li className={classes["list-item"]}></li>
          </ul>
        </div>
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
        {isExpanded ? (
          <SecondRow setHidden={setIsExpanded} />
        ) : (
          <Button text="Show more" onClick={buttonHandler} className={classes["show-more"]}/>
        )}
      </div>
    </section>
  );
};

export default Services;

import React, { ReactNode } from "react";
import classes from "./Section.module.scss";
import styles from "../scss/utils/_helpers.module.scss";

interface SectionProps {
  headingTertiary: string;
  headingSecondary: string;
  content: {heading: string, paragraph: string}[];
}

const Section: React.FC<SectionProps> = ({
  headingTertiary,
  headingSecondary,
  content,
}) => {
  return (
    <section className={`${classes.section} section-${headingTertiary}`}>
      <div className={classes["img-box"]}>
        <img src={`/${headingTertiary}.webp`} alt="" className={classes.img} />
      </div>
      <div className={classes["text-area"]}>

      <h3 className={styles["heading-tertiary"]}>{headingTertiary}</h3>
      <h2 className={styles["heading-secondary"]}>{headingSecondary}</h2>

      {content.map((item, index)=>{
        return(
          <div key={index}>
          <h4>{item.heading}</h4>
          <p>{item.paragraph}</p>
          </div>
        )
      })}
      </div>
    </section>
  );
};

export default Section;

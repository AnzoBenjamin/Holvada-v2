import React, { useState, useEffect } from "react";
import classes from "./Services.module.scss";
import styles from "../../scss/utils/_helpers.module.scss";
import Button from "../../UI/Button";



interface ServiceItemProps {
  imageClass: string;
  title: string;
  items: string[];
}
const ServiceItem: React.FC<ServiceItemProps> = ({
  imageClass,
  title,
  items,
}) => {
  return (
    <div className={classes["section-services__area--item"]}>
      <figure className={classes["section-services__area--figure"]}>
        <div className={`${classes["image-container"]} ${imageClass}`}>
          &nbsp;
          <figcaption>
            <span className={classes["section-services-img__heading"]}>
              {title}
            </span>
          </figcaption>
        </div>
      </figure>

      <ul className={classes.list}>
        {items.map((item, index) => (
          <li key={index} className={classes["list-item"]}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Services = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [visibleItems, setVisibleItems] = useState<
    { imageClass: string; title: string; items: string[] }[]
  >([]);
  const [extraItems, setExtraItems] = useState<
    { imageClass: string; title: string; items: string[] }[]
  >([]);
  const buttonHandler = () => {
    setIsExpanded(true);
  };
  const hideHandler = () => {
    setIsExpanded(false);
  };
  useEffect(() => {
    const serviceItems = [
      {
        imageClass: classes.code,
        title: "Code",
        items: [
          "Mobile development",
          "Frontend development",
          "Backend development",
          "Software as a service",
        ],
      },
      {
        imageClass: classes.art,
        title: "Art",
        items: ["Oil Paintings", "Pencil drawings", "Sculptures"],
      },
      {
        imageClass: classes.language,
        title: "Language",
        items: ["English", "French", "Kiswahili"],
      },
      {
        imageClass: classes.design,
        title: "Design",
        items: [
          "User Interface design",
          "User experience creation",
          "Logo design",
          "Flyer and poster design",
        ],
      },
      {
        imageClass: classes.music,
        title: "Music",
        items: [
          "Music theory",
          "Vocal training",
          "Instruments (Guitar, Piano, Violin)",
        ],
      },
      {
        imageClass: classes.chess,
        title: "Chess",
        items: [
          "Chess theory and history",
          "Practical training",
          "Competitions",
        ],
      },
    ];

    const calculateMaxVisibleItems = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1200) return 4;
      else if (screenWidth >= 768) return 3;
      else if (screenWidth >= 576) return 2;
      else return 1;
    };

    const maxVisibleItems = calculateMaxVisibleItems();
    setVisibleItems(serviceItems.slice(0, maxVisibleItems));
    setExtraItems(serviceItems.slice(maxVisibleItems));
  }, []);
  return (
    <section className={classes["section-services"]} id="section-services">
      <h3 className={styles["heading-tertiary"]}>Services</h3>
      <h2 className={styles["heading-secondary"]}>
        Find something for everyone with our wide collection
      </h2>
      <div className={classes["section-services__area"]}>
        {visibleItems.map((item, index) => (
          <ServiceItem
            key={index}
            imageClass={item.imageClass}
            title={item.title}
            items={item.items}
          />
        ))}
        {isExpanded ? (
          extraItems.map((item, index) => (
            <React.Fragment>
              <ServiceItem
                key={index}
                imageClass={item.imageClass}
                title={item.title}
                items={item.items}
              />
              <Button
                text="Show less"
                onClick={hideHandler}
                className={classes["show-less"]}
              />
            </React.Fragment>
          ))
        ) : (
          <Button
            text="Show more"
            onClick={buttonHandler}
            className={classes["show-more"]}
          />
        )}
      </div>
    </section>
  );
};

export default Services;

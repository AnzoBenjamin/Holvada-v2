import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import classes from "./Services.module.scss";
import styles from "../../scss/utils/_helpers.module.scss";
import Button from "../../UI/Button";

interface ServiceItemProps {
  imageClass: string;
  title: string;
  items: string[];
  bgClass: string;
  otherClass: string;
}
const ServiceItem: React.FC<ServiceItemProps> = ({
  imageClass,
  title,
  items,
  bgClass,
  otherClass,
}) => {
  const [isFlipped, setisFlipped] = useState(false);

  const handleHover = () => {
    if (window.innerWidth >= 1200) setisFlipped(!isFlipped);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setisFlipped(!isFlipped),
    onSwipedRight: () => setisFlipped(!isFlipped),
  });

  return (
    <div
      className={`${classes["section-services__area--item"]} ${
        isFlipped ? classes.flipped : ""
      } ${otherClass}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      {...(window.innerWidth < 1200 ? swipeHandlers : {})}
    >
      <div className={`${classes["section-services__area--front"]}`}>
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
      <div className={`${classes["section-services__area--back"]} ${bgClass}`}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sed,
          ad sint nihil molestias suscipit laudantium praesentium nisi unde ab
          maiores temporibus sequi veritatis enim. Vero magni tempora laudantium
          quae?
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [visibleItems, setVisibleItems] = useState<
    { imageClass: string; bgClass: string; title: string; items: string[] }[]
  >([]);
  const [extraItems, setExtraItems] = useState<
    { imageClass: string; bgClass: string; title: string; items: string[] }[]
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
        bgClass: classes["code__bg"],
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
        bgClass: classes["art__bg"],
        title: "Art",
        items: ["Oil Paintings", "Pencil drawings", "Sculptures"],
      },
      {
        imageClass: classes.language,
        bgClass: classes["language__bg"],
        title: "Language",
        items: ["English", "French", "Kiswahili"],
      },
      {
        imageClass: classes.design,
        bgClass: classes["design__bg"],
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
        bgClass: classes["music__bg"],
        title: "Music",
        items: [
          "Music theory",
          "Vocal training",
          "Instruments (Guitar, Piano, Violin)",
        ],
      },
      {
        imageClass: classes.chess,
        bgClass: classes["chess__bg"],
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
            bgClass={item.bgClass}
            otherClass=""
          />
        ))}
        {isExpanded ? (
          <React.Fragment>
            {extraItems.map((item, index) => (
              <ServiceItem
                key={index}
                imageClass={item.imageClass}
                title={item.title}
                items={item.items}
                bgClass={item.bgClass}
                otherClass={
                  isExpanded ? classes["fade-in"] : classes["fade-out"]
                }
              />
            ))}
            <Button
              text="Show less"
              onClick={hideHandler}
              className={classes["show-less"]}
            />
          </React.Fragment>
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

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import classes from "./Services.module.scss";
import styles from "../../scss/utils/_helpers.module.scss";

interface ServiceItemProps {
  imageClass: string;
  title: string;
  items: string[];
  itemIcon: string[];
  bgClass: string;
  otherClass: string;
  description: string;
}
const ServiceItem: React.FC<ServiceItemProps> = ({
  imageClass,
  title,
  items,
  itemIcon,
  bgClass,
  otherClass,
  description,
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
              <img
                src={itemIcon[index]}
                className={classes["list-item__icon"]}
              />{" "}
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={`${classes["section-services__area--back"]} ${bgClass}`}>
        <p>{description}</p>
        <a href="#" className={classes.btn}>More</a>
      </div>
    </div>
  );
};

const Services = () => {
  const serviceItems = [
    {
      imageClass: classes.code,
      bgClass: classes["code__bg"],
      title: "Software",
      items: [
        "Mobile development",
        "Web development",
        "Graphics Design",
        "Software as a service",
      ],
      itemIcon: [
        "/mobile.webp",
        "/web.webp",
        "/design-icon.webp",
        "/saas.webp",
      ],
      description:
        "Whether you need a mobile application that puts your business in the hands of your customers or a robust software system that powers your operations, our team of experts has you covered. From frontend development that creates captivating user interfaces to backend development that ensures seamless functionality, we deliver tailored software solutions that meet your unique needs.",
    },
    {
      imageClass: classes.art,
      bgClass: classes["art__bg"],
      title: "Learning",
      items: ["Language", "Art", "Music", "Chess"],
      itemIcon: [
        "/language-icon.webp",
        "/art-icon.webp",
        "/music-icon.webp",
        "/chess-icon.webp",
      ],
      description:
        "Unleash your creativity and explore the world of art with our diverse art services. From oil paintings that bring life to your imagination to intricately detailed pencil drawings and awe-inspiring sculptures, our art offerings cater to various artistic expressions.",
    },
  ];

  return (
    <section className={classes["section-services"]} id="section-services">
      <h3 className={styles["heading-tertiary"]}>Services</h3>
      <h2 className={styles["heading-secondary"]}>
        Comprehensive Solutions Tailored to Your Needs
      </h2>
      <div className={classes["section-services__area"]}>
        {serviceItems.map((item, index) => (
          <ServiceItem
            key={index}
            imageClass={item.imageClass}
            title={item.title}
            items={item.items}
            itemIcon={item.itemIcon}
            bgClass={item.bgClass}
            otherClass=""
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;

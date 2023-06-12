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
  description: string;
}
const ServiceItem: React.FC<ServiceItemProps> = ({
  imageClass,
  title,
  items,
  bgClass,
  otherClass,
  description
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
        {description}
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [visibleItems, setVisibleItems] = useState<
    { imageClass: string; bgClass: string; title: string; items: string[]; description: string }[]
  >([]);
  const [extraItems, setExtraItems] = useState<
    { imageClass: string; bgClass: string; title: string; items: string[]; description: string }[]
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
        title: "Software",
        items: [
          "Mobile development",
          "Frontend development",
          "Backend development",
          "Software as a service",
        ],
        description:
          "Whether you need a mobile application that puts your business in the hands of your customers or a robust software system that powers your operations, our team of experts has you covered. From frontend development that creates captivating user interfaces to backend development that ensures seamless functionality, we deliver tailored software solutions that meet your unique needs.",
      },
      {
        imageClass: classes.art,
        bgClass: classes["art__bg"],
        title: "Art",
        items: ["Oil Paintings", "Pencil drawings", "Sculptures"],
        description: "Unleash your creativity and explore the world of art with our diverse art services. From oil paintings that bring life to your imagination to intricately detailed pencil drawings and awe-inspiring sculptures, our art offerings cater to various artistic expressions."
      },
      {
        imageClass: classes.language,
        bgClass: classes["language__bg"],
        title: "Language",
        items: ["English", "French", "Kiswahili"],
        description: "Whether you're looking to expand your business reach or enhance your personal growth, our language programs offer a tailored approach to mastering English, French, or Kiswahili. Our experienced instructors employ engaging teaching methods that encompass listening, speaking, reading, and writing skills. From beginner levels to advanced fluency."
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
        description: "From user interface (UI) design that focuses on crafting intuitive and aesthetically pleasing digital experiences to user experience (UX) design that ensures seamless interactions, we are dedicated to creating designs that captivate and engage. Additionally, we offer logo design services that reflect your brand identity and flyer/poster design that grabs attention and delivers your message effectively."
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
        description: "Discover the joy of music and develop your musical talents with our comprehensive music services. From music theory that lays a solid foundation to vocal training that refines your singing abilities, we offer a range of courses for aspiring musicians and vocalists. Additionally, we provide instrument lessons to help you master your chosen instrument."
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
        description: "Engage in the strategic world of chess and sharpen your mind with our chess services. Whether you're a beginner seeking to learn the fundamentals or an experienced player looking to refine your skills, our chess programs cater to all levels."
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
        Comprehensive Solutions Tailored to Your Needs
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
            description={item.description}
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
                description={item.description}
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

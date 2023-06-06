import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Popup from "../../UI/Popup";
import { animationStart, reveal} from "../../utils/animation";

import barsStaggered from "/bars-staggered.svg";
import timesHexagon from "/times-hexagon.svg";
import classes from "./Navigation.module.scss";
import styles from "../../scss/components/_buttons.module.scss";

interface HiddenNavProps {
  isVisible: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

interface NavigationProps {
  isFixed: boolean;
}

const HiddenNav: React.FC<HiddenNavProps> = ({ isVisible, setMenu }) => {
  const hiddenMenuHandler = () => {
    setMenu(false);
  };
  return (
    <nav
      className={`${classes["nav__hidden"]} ${
        isVisible ? classes.visible : ""
      }`}
    >
      <div className={classes["nav__hidden--header"]}>
        <h2 className={classes["nav__header"]}>Holvada</h2>
        <img
          src={timesHexagon}
          alt=""
          className={classes["nav__icon"]}
          onClick={hiddenMenuHandler}
        />
      </div>
      <ul className={classes["nav__hidden--items"]}>
        <li className={classes["nav__hidden--item"]}>
          <Link smooth to="header" onClick={hiddenMenuHandler}>
            Home
          </Link>
        </li>
        <li className={classes["nav__hidden--item"]}>
          <Link smooth to="section-about" onClick={hiddenMenuHandler}>
            About us
          </Link>
        </li>
        <li className={classes["nav__hidden--item"]}>
          <Link smooth to="section-services" onClick={hiddenMenuHandler}>
            Services
          </Link>
        </li>
        <li className={classes["nav__hidden--item"]}>
          <Link smooth to="section-prices" onClick={hiddenMenuHandler}>
            Pricing
          </Link>
        </li>
      </ul>
    </nav>
  );
};
const Navigation: React.FC<NavigationProps> = ({ isFixed }) => {
  const menuRoot = document?.getElementById("menu-root");
  const [menu, setMenu] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const menuHandler = () => {
    setMenu(true);
  };

  const buttonHandler = () => {
    setIsPopupVisible(true);
  };

  return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: animationStart }}
      >
                <Popup isVisible={isPopupVisible} setIsVisible={setIsPopupVisible} />
        <motion.div
          variants={reveal}
          initial="hiddenVariant"
          animate="revealVariant"
          transition={{
            ease: "easeIn",
            type: "tween",
            duration: 0.5,
            staggerChildren: 0.2,
            delayChildren: animationStart + 0.5,
          }}
          className={`${classes.nav} ${isFixed ? classes.fixed : ""} `}
        >
          <motion.h2 variants={reveal} className={classes["nav__header"]}>
            Holvada
          </motion.h2>
          <motion.div className={classes["nav__left"]}>
            <ul className={classes["desktop-nav"]}>
              <motion.li
                variants={reveal}
                className={classes["desktop-nav--item"]}
              >
                <Link smooth to="header">
                  Home
                </Link>
              </motion.li>
              <motion.li
                variants={reveal}
                className={classes["desktop-nav--item"]}
              >
                <Link smooth to="section-about">
                  About us
                </Link>
              </motion.li>
              <motion.li
                variants={reveal}
                className={classes["desktop-nav--item"]}
              >
                <Link smooth to="section-services">
                  Services
                </Link>
              </motion.li>
              <motion.li
                variants={reveal}
                className={classes["desktop-nav--item"]}
              >
                <Link smooth to="section-prices">
                  Pricing
                </Link>
              </motion.li>
            </ul>
            <motion.a
              variants={reveal}
              href="#"
              className={styles.btn}
              onClick={buttonHandler}
            >
              Join us
            </motion.a>
            <motion.img
              variants={reveal}
              src={barsStaggered}
              alt="Bars Staggered"
              className={`${classes["nav__icon"]} ${classes["mobile-nav"]}`}
              onClick={menuHandler}
            />
          </motion.div>
        </motion.div>
        {menuRoot &&
          createPortal(
            <HiddenNav isVisible={menu} setMenu={setMenu} />,
            menuRoot
          )}
      </motion.div>
  );
};

export default Navigation;

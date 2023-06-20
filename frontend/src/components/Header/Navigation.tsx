import React, { useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import Popup from "../../UI/Popup";
import { animationStart, reveal } from "../../utils/animation";
import MobileNav from "../Nav/MobileNav";
import DesktopNav from "../Nav/DesktopNav";

import barsStaggered from "/bars-staggered.svg";
import classes from "./Navigation.module.scss";
import styles from "../../scss/components/_buttons.module.scss";


interface NavigationProps {
  isFixed: boolean;
  navHeading: string;
  navItems: string[];
  navLinks: string[];
}


const Navigation: React.FC<NavigationProps> = ({ isFixed, navHeading, navItems, navLinks }) => {
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

          <DesktopNav items={navItems} links={navLinks}/>
          
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
          <MobileNav isVisible={menu} setMenu={setMenu} items={navItems} links={navLinks} />,
          menuRoot
        )}
    </motion.div>
  );
};

export default Navigation;

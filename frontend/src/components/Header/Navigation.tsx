import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Link } from 'react-scroll';
import barsStaggered from "/bars-staggered.svg";
import timesHexagon from "/times-hexagon.svg";
import classes from "./Navigation.module.scss";
import styles from "../../scss/components/_buttons.module.scss";

interface HiddenNavProps{
  isVisible: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

interface NavigationProps{
  isFixed: boolean;
}

const HiddenNav: React.FC<HiddenNavProps> = ({isVisible, setMenu}) => {
  const hiddenMenuHandler = ()=>{
    setMenu(false)
  }
  return (
    <nav className={`${classes["nav__hidden"]} ${isVisible ? classes.visible : ""}`}>
        <div className={classes["nav__hidden--header"]}>
        <h2 className={classes["nav__header"]}>Holvada</h2>
        <img src={timesHexagon} alt="" className={classes["nav__icon"]} onClick={hiddenMenuHandler}/>
        </div>
        <ul className={classes['nav__hidden--items']}>
          <li className={classes['nav__hidden--item']}><Link to='header' onClick={hiddenMenuHandler}>Home</Link></li>
          <li className={classes['nav__hidden--item']}><Link to='section-about' onClick={hiddenMenuHandler}>About us</Link></li>
          <li className={classes['nav__hidden--item']}><Link to='section-services' onClick={hiddenMenuHandler}>Services</Link></li>
          <li className={classes['nav__hidden--item']}><Link to='section-prices' onClick={hiddenMenuHandler}>Pricing</Link></li>
        </ul>
      </nav>

  );
};
const Navigation: React.FC<NavigationProps> = ({isFixed}) => {
  const menuRoot = document?.getElementById('menu-root');
  const [menu, setMenu] = useState(false);
  const menuHandler = () => {
    setMenu(true);
  };

  return (
    <div className={classes.nav}>
      <h2 className={classes["nav__header"]}>Holvada</h2>
      <div className={classes["nav__left"]}>
        <a href="#" className={styles.btn}>
          Join us
        </a>
        <img
          src={barsStaggered}
          alt="Bars Staggered"
          className={`${ isFixed ? classes.fixed : ""} ${classes["nav__icon"]}` }
          onClick={menuHandler}
        />
        {menuRoot && createPortal(<HiddenNav isVisible={menu} setMenu={setMenu}/>, menuRoot)}
      </div>
    </div>
  );
};

export default Navigation;

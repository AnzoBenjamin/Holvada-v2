import React, { ReactNode, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate, Link } from "react-router-dom";
import { DashboardNav } from "./DashboardNav";
import { useAuth } from "../../../store/auth-context";
import Footer from "../../Footer/Footer";
import barsStaggered from "/bars-staggered.svg";
import MobileNav from "../../Nav/MobileNav";
import classes from "./DashboardLayout.module.scss";
import styles from "../../../scss/components/_buttons.module.scss";

interface DashboardLayoutProps {
  children: ReactNode;
}

interface DesktopNavProps {
  items: string[];
  links: string[];
}

const DesktopNav: React.FC<DesktopNavProps> = ({ items, links }) => {
  return (
    <ul className={classes["desktop-nav"]}>
      {items.map((item, index) => (
        <li key={index} className={`${classes["desktop-nav--item"]}`}>
          <Link to={`/${links[index]}`}>
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
}

const Navigation = () => {
  const menuRoot = document?.getElementById("menu-root");
  const [menu, setMenu] = useState(false);
  const [isFixed, setisFixed] = useState(false);
  const { signout } = useAuth();
  const navigate = useNavigate();
  const menuHandler = () => {
    setMenu(true);
    setisFixed(false)
  };
  const signOutHandler = async () => {
    try {
      signout();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const screenWidth = window.innerWidth;
  const navItems = ["Home", "Learn", "Showcases"];
  const navLinks = ["", "learn", "performance"];
  return (
    <div>
      <div className={`${classes.nav} ${isFixed ? classes.fixed : ""} `}>
        <h2 className={classes["nav__header"]}>Holvada</h2>
        {screenWidth > 1000 ? (
          <React.Fragment>
            <DesktopNav items={navItems} links={navLinks} />

            <div>
              <button className={styles.btn} onClick={signOutHandler}>
                Signout
              </button>
            </div>
            <img
              src={barsStaggered}
              alt="Bars Staggered"
              className={`${classes["nav__icon"]} ${classes["mobile-nav"]}`}
              onClick={menuHandler}
            />
          </React.Fragment>
        ) : (
          <div className={classes["nav__left"]}>
            <div>
              <button className={styles.btn} onClick={signOutHandler}>
                Signout
              </button>
            </div>
            <img
              src={barsStaggered}
              alt="Bars Staggered"
              className={`${classes["nav__icon"]} ${classes["mobile-nav"]}`}
              onClick={menuHandler}
            />
          </div>
        )}
      </div>
      {menuRoot &&
        createPortal(
          <MobileNav
            isVisible={menu}
            setMenu={setMenu}
            items={navItems}
            links={navLinks}
          />,
          menuRoot
        )}
    </div>
  );
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div>
      <Navigation />
      <div className={classes.layout}>
        <DashboardNav />
        <div className={classes.main}>{children}</div>
      </div>
      <Footer/>
    </div>
  );
};

export default DashboardLayout;

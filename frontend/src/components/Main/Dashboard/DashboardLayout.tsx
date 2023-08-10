import React, { ReactNode, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createPortal } from "react-dom";
import { DashboardNav } from "./DashboardNav";
import barsStaggered from "/bars-staggered.svg";
import DesktopNav from "../../Nav/DesktopNav";
import MobileNav from "../../Nav/MobileNav";
import classes from "./DashboardLayout.module.scss";
import styles from "../../../scss/components/_buttons.module.scss"
import { useAuth } from "../../../store/auth-context";

interface DashboardLayoutProps {
  children: ReactNode;
}
const Navigation = () =>{

  const menuRoot = document?.getElementById("menu-root");
  const [menu, setMenu] = useState(false);
  const [isFixed, setisFixed] = useState(false)
  const { currentUser } = useAuth();
  const menuHandler = () => {
    setMenu(true);
  };

  const screenWidth = window.innerWidth;
  const navItems = ["Home", "Learn", "Showcases"]
  const navLinks = ["home", "learn", "perform"]
  return (
    <div
    >
      <div
        className={`${classes.nav} ${isFixed ? classes.fixed : ""} `}
      >
        <h2 className={classes["nav__header"]}>
          Holvada
        </h2>
        {screenWidth > 1000 ? (
          <React.Fragment>
            <DesktopNav items={navItems} links={navLinks} />

            <div className={styles.btn}>
            {currentUser ? (
                  <Link to={"/dashboard/add"} className={styles.btn}>Account</Link>
                ) : (
                  <Link to={"/signup"} className={styles.btn}>Join Us</Link>
                )}
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
                {currentUser ? (
                  <Link to={"/dashboard/add"} className={styles.btn}>Account</Link>
                ) : (
                  <Link to={"/signup"} className={styles.btn}>Join Us</Link>
                )}
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
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  const buttonHandler = async () => {
    try {
      await signout();
      navigate("/");
    } catch (error: any) {
      console.log(error.message);
    }
  };
  
  return (
    <div>
      <Navigation/>
      <div className={classes.layout}>
        <DashboardNav />
        <div className={classes.main}>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;

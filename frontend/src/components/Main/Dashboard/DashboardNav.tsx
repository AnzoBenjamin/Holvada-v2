import React from "react";
import { Link } from "react-router-dom";
import classes from "./DashboardNav.module.scss";
import barsStaggered from "/bars-staggered.svg";

export const DashboardNav: React.FC = () => {
  const screenWidth = window.innerWidth;
  return screenWidth > 1000 ? (
    <nav className={classes.nav}>

      <ul className={classes.list}>
        <li className={classes["list-item"]}>
          <img src="/add.png" alt="add" className={classes.icon} />
          <Link to={"/dashboard/add"}>Add</Link>
        </li>
        <li className={classes["list-item"]}>
          <img src="/upcoming.png" alt="upcoming" className={classes.icon} />
          <Link to={"/dashboard/upcoming"}>Upcoming</Link>
        </li>
        <li className={classes["list-item"]}>
          <img src="/pending.png" alt="pending" className={classes.icon} />
          <Link to={"/dashboard/pending"}>Pending</Link>
        </li>
        <li className={classes["list-item"]}>
          <img src="/complete.png" alt="completed" className={classes.icon} />
          <Link to={"/dashboard/completed"}>Completed</Link>
        </li>
      </ul>
    </nav>
  ) : (
    <div className={classes["mobile-nav"]}>
      <img src={barsStaggered} alt="Menu bar" className={classes.icon} />
    </div>
  );
};

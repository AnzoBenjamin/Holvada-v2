import React from "react";
import { Link } from "react-router-dom";
import classes from "./DashboardNav.module.scss";

export const DashboardNav = () => {
  return (
    <nav className={classes.nav}>
      <h2>Orders</h2>
      <ul className={classes.list}>
        <li className={classes["list-item"]}>
          <img src="/add.png" alt="add" className={classes.icon}/>
          <Link to={"/dashboard/add"}>Add</Link>
        </li>
        <li className={classes["list-item"]}>
          <img src="/upcoming.png" alt="upcoming" className={classes.icon}/>
          <Link to={"/dashboard/upcoming"}>Upcoming</Link>
        </li>
        <li className={classes["list-item"]}>
          <img src="/pending.png" alt="pending" className={classes.icon}/>
          <Link to={"/dashboard/pending"}>Pending</Link>
        </li>
        <li className={classes["list-item"]}>
          <img src="/complete.png" alt="completed" className={classes.icon}/>
          <Link to={"/dashboard/completed"}>Completed</Link>
        </li>
      </ul>
    </nav>
  );
};

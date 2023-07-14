import React from "react";
import { DashboardHeader } from "./DashboardHeader";
import { DashboardMain } from "./DashboardMain";

export const Dashboard = () => {
  return (
    <React.Fragment>
      <DashboardHeader />
      <DashboardMain/>
    </React.Fragment>
  );
};

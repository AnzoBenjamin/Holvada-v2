import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Add } from "./Add";
import { Upcoming } from "./Upcoming";
import { Pending } from "./Pending";
import { Completed } from "./Completed";
import DashboardLayout from "./DashboardLayout";

export const DashboardContent = () => {
  return (
    <Routes>
      <Route
        path="/dashboard/add"
        element={
          <DashboardLayout>
            <Add />
          </DashboardLayout>
        }
      />

      <Route
        path="/dashboard/upcoming"
        element={
          <DashboardLayout>
            <Upcoming />
          </DashboardLayout>
        }
      />

      <Route
        path="/dashboard/pending"
        element={
          <DashboardLayout>
            <Pending />
          </DashboardLayout>
        }
      />

      <Route
        path="/dashboard/completed"
        element={
          <DashboardLayout>
            <Completed />
          </DashboardLayout>
        }
      />
    </Routes>
  );
};

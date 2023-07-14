import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home";
import Technology from "./components/Technology/Technology";
import Learning from "./components/Main/Learning/Learning";
import Performance from "./components/Main/Performance/Performance";
import Loading from "./UI/Loading";
import AuthProvider from "./store/auth-context";
import { Dashboard } from "./components/Main/Dashboard/Dashboard";
import Login from "./components/Form/Login";
import Signup from "./components/Form/Signup";
import { Verification } from "./components/Verification";
import { PrivateRoute } from "./PrivateRoute";
import { ForgotPassword } from "./components/Form/ForgotPassword";
import { Add } from "./components/Main/Dashboard/Add";
import { Upcoming } from "./components/Main/Dashboard/Upcoming";
import { Pending } from "./components/Main/Dashboard/Pending";
import { Completed } from "./components/Main/Dashboard/Completed";
import DashboardLayout from "./components/Main/Dashboard/DashboardLayout";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  /* Loading screen animation */
  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={isLoading ? <Loading /> : <Home />} />
            <Route
              path="/dashboard"
              element={
                isLoading ? (
                  <Loading />
                ) : (
                  <PrivateRoute>
                    {" "}
                    <Dashboard />
                  </PrivateRoute>
                )
              }
            />
            <Route
              path="/login"
              element={isLoading ? <Loading /> : <Login />}
            />
            <Route
              path="/signup"
              element={isLoading ? <Loading /> : <Signup />}
            />
            <Route
              path="/tech"
              element={isLoading ? <Loading /> : <Technology />}
            />
            <Route
              path="/learn"
              element={isLoading ? <Loading /> : <Learning />}
            />
            <Route
              path="/performance"
              element={isLoading ? <Loading /> : <Performance />}
            />
            <Route
              path="/forgot-password"
              element={isLoading ? <Loading /> : <ForgotPassword />}
            />
            <Route
              path="/verification"
              element={isLoading ? <Loading /> : <Verification />}
            />
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
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;

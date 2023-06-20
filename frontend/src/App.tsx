import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home";
import Technology from "./components/Technology/Technology";
import Learning from "./components/Learning";
import Performance from "./Performance";
import Loading from "./UI/Loading";

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
        <Routes>
          <Route path="/" element={isLoading ? <Loading /> : <Home />} />
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
        </Routes>
      </Router>
    </>
  );
}

export default App;

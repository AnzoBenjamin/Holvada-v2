import { useState, useEffect } from "react";
import "./App.scss";
import Home from "./components/Home";
import Loading from "./UI/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

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
     { isLoading ? <Loading/> : <Home /> }
    </>
  );
}

export default App;

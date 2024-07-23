import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import nightsky from "./LottieFiles/night-sky.json";
import DotLoader from "react-spinners/DotLoader";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import MoveToTop from "./Components/MoveToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Resume from "./pages/Resume";
import "./App.css";

function App() {
  const [Loading, SetLoading] = useState(true);
  useEffect(() => {
    SetLoading(true);

    setTimeout(() => {
      SetLoading(false);
    }, 1900);
  }, []);
  return (
    <>
      {Loading ? (
        <div className="loader">
          <DotLoader
            color={"#9067C6"}
            loading={true}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          <Lottie className="bg" animationData={nightsky} loop={true} />
          <Lottie className="bgtwo" animationData={nightsky} loop={true} />
          <Lottie className="bgtemp" animationData={nightsky} loop={true} />

          <Navbar />
          <MoveToTop />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Project" element={<Projects />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Resume" element={<Resume />} />
          </Routes>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;

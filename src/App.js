import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Share from "./pages/Share";
import Favorites from "./pages/Favorites";

const App = () => {
  return (
    <div className="App min-h-screen bg-gray-100 min-w-screen flex flex-col justify-between">
      <Router>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/recipes"} element={<Recipes />} />
          <Route path={"/share"} element={<Share />} />
          <Route path={"/favorites"} element={<Favorites />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

// Fonts: 
// description links / DM Sans 400
// titles subtitles / Roboto 400

// Colors:
// background / #FFC3A0
//            / #F5EDE7
// typography / #000
// blue buttons / #0126DE

// Container / width: 1440px
//           / padding: 0 15px
//           / margin: 0 auto







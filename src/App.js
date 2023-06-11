import React from "react";
import Navbar from "./components/Navbar";
import HeroText from "./components/HeroText";
import DataAnalytics from "./components/DataAnalytics";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards"

function App() {
  return (
    <div>
      <Navbar/>
      <HeroText/>
      <DataAnalytics/>
      <Newsletter/>

    </div>
  );
}

export default App;

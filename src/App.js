import React, { Component } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import BannerSlider from "./components/banner-slider";
import CheckAvailability from "./components/check-availability";
import OurBest from "./components/our-best";
import Map from "./components/map";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="page-wrap" className="bg-white-2">
          {/* HEADER */}
          <Header />
          <BannerSlider />
          <CheckAvailability />
          <OurBest />
          <Map />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import BannerSlider from "./components/banner-slider";
import CheckAvailability from "./components/check-availability";
import OurBest from "./components/our-best";
import Map from "./components/map";
import Activiti from "./components/activiti";
import Wrapper from "./wrapper/wrapper";
import {
  BrowserRouter as RoutingC,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import mainPage from "./pages/mainPage";
class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <div id="page-wrap" className="bg-white-2"></div>
      // </div>
      <Wrapper>
        <RoutingC>
          <Switch>
            <Route exact path="/" component={mainPage} />
            <Route path="/Activity" component={Activiti} />
          </Switch>
        </RoutingC>
      </Wrapper>
    );
  }
}

export default App;

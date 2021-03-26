import React from "react";
import wifi from "../home-3/icon/icon-11.png";

const Item = ({ image, description }) => {
  return (
    <div className="col-xs-6 col-sm-4 col-md-4">
      <div className="item">
        <img className="img-responsive block mb10" src={image} alt="icon" />
        <span>{description}</span>
      </div>
    </div>
  );
};

const OurBest = () => {
  return (
    // OUR BEST
    <section className="section-our-best our-best-style-2 mt100 pt0 pb0 bg-white">
      <div className="container">
        <div className="our-best">
          <div className="row v-align">
            <div className="col-xs-12 col-sm-6 col-sm-push-6">
              <div className="img-hover-box">
                <div className="img mt0">
                  <img
                    className="img-responsive img-full"
                    src="images/home-3/about.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-sm-pull-6 ">
              <div className="ot-heading row-20 text-center">
                <h2>Out best</h2>
                <p className="sub f16 mb40">
                  One of Catalina Island's best-loved hotels, Hotel Vista Del
                  Mar is recognized as one of Avalon's leading hotels with
                  gracious island hospitality, thoughtful amenities and
                  distinctive .
                </p>
              </div>
              <div className="owl-single">
                <div className="row">
                  <Item image={wifi} description="Free Wifi" />
                  <Item image={wifi} description="Car Parking" />
                  <Item image={wifi} description="Service Room" />
                  <Item image={wifi} description="Air Conditioner" />
                  <Item image={wifi} description="Airtel Digital TV" />
                  <Item image={wifi} description="Luggage" />
                </div>
                <div className="row">
                  <Item image={wifi} description="Free Wifi" />
                  <Item image={wifi} description="Car Parking" />
                  <Item image={wifi} description="Service Room" />
                  <Item image={wifi} description="Air Conditioner" />
                  <Item image={wifi} description="Airtel Digital TV" />
                  <Item image={wifi} description="Luggage" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // END / OUR BEST
  );
};

export default OurBest;

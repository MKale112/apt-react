import React from "react";

const Map = () => {
  return (
    //  MAP
    <section className="section-map style-2 clearfix mt100">
      <div className="contact-map">
        <div
          id="map"
          className="awe-parallax"
          data-styles="silver"
          data-locations="39.0926986,-94.5747324--39.0912284,-94.5743515"
          data-center="39.0926986,-94.5747324"
        ></div>

        <div className="container contact text-center">
          <div className="contact-main pt40 pb60 bg-white-2">
            <div className="ot-heading row-20 mb40 text-center">
              <h2>Contact with us</h2>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-4">
                <div className="item">
                  <p className="f20">
                    <i className="lotus-icon-location c-main block f30 mb20"></i>{" "}
                    225 Beach Street, Australian
                  </p>
                  <p className="description font-monserat f12 bold upper">
                    Address
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4">
                <div className="item">
                  <p className="f20">
                    <i className="lotus-icon-phone c-main block f30 mb20"></i>{" "}
                    1-548-854-8898
                  </p>
                  <p className="description font-monserat f12 bold upper">
                    Phone
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4">
                <div className="item">
                  <p className="f20">
                    <i className="fa fa-envelope-o c-main block f30 mb20"></i>{" "}
                    <a href="mailto:hello@thelotushotel.com">
                      hello@thelotushotel.com
                    </a>{" "}
                  </p>
                  <p className="description font-monserat f12 bold upper">
                    Email
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // END / MAP
  );
};

export default Map;

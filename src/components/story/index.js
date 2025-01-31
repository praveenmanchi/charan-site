import React from "react";
import { Link } from "react-router-dom";
import strory1 from "../../images/story/haldi.jpg";
import strory2 from "../../images/story/sangeeth.jpg";
import strory3 from "../../images/story/wedding.jpg";
import strory4 from "../../images/story/reception.jpg";
import "./style.css";

const Story = () => {
  return (
    <div id="story" className="story-area section-padding">
      <div className="container">
        <div className="col-l2">
          <div className="section-title text-center">
            <h2>Our Events</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="story clearfix">
              <div className="story-top"></div>
              <div className="content-wrapper">
                <div className="item">
                  <div className="story-icon">
                    <span className="flaticon-birds-in-love"></span>
                  </div>
                  <div className="story-content">
                    <div className="image-wrap">
                      <div className="single-image">
                        <div>
                          <img src={strory1} alt="" />
                        </div>
                      </div>
                    </div>
                    <h2>Pasupu Veduka (Haldi)</h2>
                    <span className="date">Friday, 15 Feb, 2025 </span>
                    <span className="date">8:00 AM – 1:00 PM</span>

                    <p>3 Seasons Resort, Gangavathii, Karnataka.</p>
                    <div className="story-button">
                    <div className="btn"><Link to="https://maps.app.goo.gl/vfX5L7ay7N5NQejU9">Open Maps</Link></div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="story-icon">
                    <span className="flaticon-birds-in-love"></span>
                  </div>
                  <div className="story-content">
                    <div className="image-wrap">
                      <div className="single-image">
                        <div>
                          <img src={strory2} alt="" />
                        </div>
                      </div>
                    </div>
                    <h2>Fun filled Sangeeth</h2>
                    <span className="date">Friday, 15 Feb, 2025 </span>
                    <span className="date">6:00 PM – 11:00 PM</span>

                    <p>3 Seasons Resort, Gangavathii, Karnataka.</p>
                    <div className="story-button">
                    <div className="btn"><Link to="https://maps.app.goo.gl/vfX5L7ay7N5NQejU9">Open Maps</Link></div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="story-icon">
                    <span className="flaticon-birds-in-love"></span>
                  </div>
                  <div className="story-content">
                    <div className="image-wrap">
                      <div className="single-image">
                        <div>
                          <img src={strory3} alt="" />
                        </div>
                      </div>
                    </div>
                    <h2>Akiran Kalyanam (Wedding)</h2>
                    <span className="date">Friday, 16 Feb, 2025 </span>
                    <span className="date">7:00 PM – 2:00 AM</span>

                    <p>Amar Gardens Convention Hall</p>
                    <div className="story-button">
                    <div className="btn"><Link to="https://maps.app.goo.gl/vfX5L7ay7N5NQejU9">Open Maps</Link></div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="story-icon">
                    <span className="flaticon-birds-in-love"></span>
                  </div>
                  <div className="story-content">
                    <div className="image-wrap">
                      <div className="single-image">
                        <div>
                          <img src={strory4} alt="" />
                        </div>
                      </div>
                    </div>
                    <h2>Reception</h2>
                    <span className="date">Friday, 23 Feb, 2025 </span>
                    <span className="date">11:00 AM – 2:00 PM</span>

                    <p>Alapati Gangabhavani Kalyanamandapam</p>
                    <div className="story-button">
                    <div className="btn"><Link to="https://maps.app.goo.gl/vfX5L7ay7N5NQejU9">Open Maps</Link></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="story-bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;

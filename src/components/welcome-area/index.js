import React from 'react';
import './style.css';
import LocationMap from '../LocationModal/LocationModal';

const Welcome = () => {
    return (
        <div className="welcome-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="welcome-content">
                            <h2>Please Join virtually in our celebration</h2>
                            <p>
                                It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
                            </p>
                            <div className="btn">
                                <a href="https://www.youtube.com/live/rDwk4ubbKek" target="_blank" rel="noopener noreferrer">
                                    Watch Live
                                </a>
                            </div>
                            {/* <LocationMap buttonClass={'location-btn'} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;

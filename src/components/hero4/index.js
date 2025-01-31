import React from 'react';
import classes from '../../css/BackgroundVideo.module.css';


const BackgroundVideo = () => {
    const videoSource = "https://static.videezy.com/system/resources/previews/000/033/224/original/bride10.mp4";
    const logoSource = "/charanlogo.svg"; // replace with your logo path

    return (
        <div className="vedio-area" id="home">
            <div className={classes.Container}>
                <video autoPlay="autoplay" loop="loop" muted className={classes.Video}>
                    <source src={videoSource} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                
                {/* Transparent black overlay */}
                <div className={classes.Overlay}></div>

                <div className={classes.Content}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="welcome-content">
                                {/* Logo above the welcome text */}
                                <img src={logoSource} alt="Logo" className={classes.Logo} />

                                <h4>WE'RE GETTING MARRIED</h4>
                                <h2>Welcome to our big day</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                                <p>25 December 2019</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BackgroundVideo;

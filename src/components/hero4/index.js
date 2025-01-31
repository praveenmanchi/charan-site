import React, { useEffect, useRef } from 'react';
import classes from '../../css/BackgroundVideo.module.css';

const BackgroundVideo = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            // Try to play the video programmatically (helps on iOS)
            videoRef.current.play().catch((error) => {
                console.log("Autoplay failed, user interaction required", error);
            });
        }
    }, []);

    const videoSource = "https://ycsfwdainpwgmgsjqppv.supabase.co/storage/v1/object/public/OG-images//background.mp4";
    const logoSource = "/charanlogo.svg";

    return (
        <div className="vedio-area" id="home">
            <div className={classes.Container}>
                <video 
                    ref={videoRef} 
                    autoPlay="autoplay" 
                    loop="loop" 
                    muted 
                    playsInline 
                    webkit-playsinline
                    className={classes.Video}
                >
                    <source src={videoSource} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Transparent black overlay */}
                <div className={classes.Overlay}></div>

                {/* Content with centered text */}
                <div className={classes.Content}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="welcome-content">
                                <img src={logoSource} alt="Logo" className={classes.Logo} />
                                <h4>Pasupuleti's Invite</h4>
                                <h2>Together with our families and friends invite you to be a part of our celebration</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or less normal distribution of letters</p>
                                <p>16 Feb, 2025 | 11:45 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BackgroundVideo;

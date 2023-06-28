import React, { useEffect, useRef } from "react";
import "./Header.css";

import webVideo from "../../assets/vids/webHeader.mp4";
import Navbar from "../Navbar/Navbar";

const Header = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        const playPromise = video.play();

        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    // Autoplay started successfully
                })
                .catch((error) => {
                    // Autoplay failed, handle the error
                    console.error("Autoplay failed:", error);
                });
        }
    }, []);

    return (
        <div className="header">
            <Navbar />
            <div className="header-bg">
                {/* <img
                    src={
                        window?.innerWidth > 800
                            ? "/img/image_1-removebg-preview 1.svg"
                            : "/img/image_1-removebg-preview 1 copy.svg"
                    }
                    width={"100%"}
                    height={"100%"}
                    style={{ objectFit: "cover" }}
                />{" "} */}

                <video
                    ref={videoRef}
                    id="myVideo"
                    autoPlay
                    loop
                    muted
                    style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <source src={webVideo} />
                    {/* Add additional source elements for different video formats if needed */}
                    Sorry, your browser doesn't support embedded videos.
                </video>
            </div>
        </div>
    );
};

export default Header;

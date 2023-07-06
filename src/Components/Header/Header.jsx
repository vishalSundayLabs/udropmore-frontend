import React, { useEffect, useRef, useState } from "react";
import "./Header.css";

import webVideo from "../../assets/vids/webHeader.mp4";
import Navbar from "../Navbar/Navbar";
import { IntercomProvider, useIntercom } from "react-use-intercom";
const INTERCOM_APP_ID = "hglqv3pd";

const HomePage = () => {
  const { boot, shutdown, hide, show, update } = useIntercom();
  return boot();
};

const Header = () => {


  return (
    <>
      <div className="header">
        <Navbar />
        <div className="header-bg">
          <video
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
      <IntercomProvider appId={INTERCOM_APP_ID}>
        <HomePage />
      </IntercomProvider>
    </>
  );
};

export default Header;

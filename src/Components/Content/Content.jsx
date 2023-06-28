import React, { useEffect, useState } from "react";
import "./Content.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Countdown from "react-countdown";
import { Carousel } from "@trendyol-js/react-carousel";
import Timer from "../Timer/Timer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { GrPrevious } from "react-icons/gr";
import { FlipDate } from "../flipTimer/FlipDate";
import AuctionPolling from "../AuctionPolling/AuctionPolling";

const Content = () => {
  const [auctions, setAuctions] = useState([]);
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  const fetchData = async () => {
    await axios
      .get("http://localhost:8080/v1/auction/upcomming")
      .then((response) => {
        setAuctions(response.data.result);
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
    return () => {};
  }, [auctions]);

  const handleParticipate = async (auctionId, userId) => {
    await axios({
      method: "put",
      url: `http://localhost:8080/v1/auction/participate/${auctionId}/${userId}`,
    })
      .then((response) => {
        if (response.data.result) {
          alert(response.data);
          navigate(`/product?productId=${response.data.result.productId}`);
        } else {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    setAuctions(auctions);
  }, [auctions]);

  return (
    <div className="product_carousel">
      <Carousel
        show={4}
        slide={1}
        swiping={true}
        autoSwipe={5000}
        dynamic={true}
        useArrowKeys={true}
        hideArrows={false}
        // nextArrow={<GrPrevious fontSize="1.5em"  color="white"/>}
      >
        {auctions.map((item, index) => {
          return (
            <div className="content-flex content-fix" key={index}>
              <p className="timer-title">
                {item.status == "ACTIVE" ? "Remaining Time" : "Starts In"}
              </p>
              <h1 className="text-2xl">
                {item.status == "ACTIVE" ? (
                  <FlipDate value={item.endTime} />
                ) : (
                  <FlipDate value={item.startTime} />
                )}
              </h1>
              {/* {item.status == "ACTIVE" ? (
                <>
                  <p className="timer-title">Remaining Time</p>
                  <h1 className="text-2xl">
                    <FlipDate value={item.endTime} />
                  </h1>
                </>
              ) : (
                <>
                  <p className="timer-title">Starts In</p>
                  <h1 className="text-2xl">
                    <FlipDate value={item.startTime} />
                  </h1>
                </>
              )} */}
              <img
                src="/img/WhatsApp Image 2023-06-06 at 15.40 4.svg"
                width={"100%"}
              />
              <button
                className="font-semibold"
                style={{ fontSize: "14px" }}
                onClick={() => handleParticipate(item._id, userId)}
              >
                Participate
              </button>
            </div>
          );
        })}
      </Carousel>
      <AuctionPolling
        url={"http://localhost:8080/v1/auction/polling"}
        interval={1000}
        retryCount={3}
        states={auctions}
        setStates={setAuctions}
      />
    </div>
  );
};

export default Content;

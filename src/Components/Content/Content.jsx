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

const Content = () => {
  const [auctions, setAuctions] = useState(["a", "b", "b", 2, 3, 5, 6, 7, 7]);
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
  }, []);

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

  return (
    <>
      <Carousel
        show={4}
        slide={1}
        swiping={true}
        autoSwipe={5000}
        dynamic={true}
        useArrowKeys={true}
        hideArrows={false}
      >
        {auctions.map((item, index) => {
          return (
            <div className="content-flex content-fix" key={index}>
              <img src="/img/Time Remaining.svg" width={"80%"} />
              <Timer
                interval={
                  new Date(item.endTime).getTime() -
                  new Date(item.startTime).getTime()
                }
              />
              <img
                src="/img/WhatsApp Image 2023-06-06 at 15.40 4.svg"
                width={"100%"}
              />
              <button onClick={() => handleParticipate(item._id, userId)}>
                Participate
              </button>
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default Content;

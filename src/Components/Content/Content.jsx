import React, { useEffect, useState } from "react";
import "./Content.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Countdown from "react-countdown";
// import { Carousel } from "@trendyol-js/react-carousel";
import Timer from "../Timer/Timer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { GrPrevious } from "react-icons/gr";
import { FlipDate } from "../flipTimer/FlipDate";
import AuctionPolling from "../AuctionPolling/AuctionPolling";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Content = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const [auctions, setAuctions] = useState([]);
  const userId = localStorage.getItem("userId");
  const [millisecond, setMiliseconds] = useState(1000);
  const navigate = useNavigate();

  const fetchData = async () => {
    await axios
      .get("http://localhost:8080/v1/auction/upcomming")
      .then((response) => {
        setAuctions(response.data.result);
      })
      .catch((error) => {
        toast.error(`${error.message}`, {
          position: toast.POSITION.TOP_RIGHT,
          theme: "dark",
        });
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  const redirect = (productId, auctionId) => {
    navigate(`/product2?productId=${productId}&auctionid=${auctionId}`);
  };

  useEffect(() => {
    setAuctions(auctions);
  }, []);

  setInterval(() => {
    setMiliseconds(millisecond - 1);
  }, 1);

  return (
    <div className="product_carousel">
      {auctions.length > 0 ? (
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="transform 300ms ease-in-out"
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {auctions.map((item, index) => {
            console.log(item);
            return (
              <div className="content-flex content-fix" key={index}>
                <p className="timer-title">
                  {item.status == "ACTIVE" ? "Remaining Time" : "Starts In"}
                </p>
                <h1 className="text-2xl">
                  {item.status == "ACTIVE" ? (
                    <>
                      <FlipDate value={item.endTime} />
                    </>
                  ) : (
                    <FlipDate value={item.startTime} />
                  )}
                </h1>
                <img src={item?.productId?.homePageImageUrl} width={"100%"} />
                <button
                  className="font-semibold"
                  style={{ fontSize: "14px" }}
                  onClick={() => redirect(item.productId._id, item._id)}
                >
                  Participate
                </button>
              </div>
            );
          })}
        </Carousel>
      ) : (
        <div className="border-2 border-solid rounded-lg border-[red] p-10 m-10">
          <h1 className="text-[red] text-4xl font-mono font-bold text-center">
            No Auctions
          </h1>
        </div>
      )}
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

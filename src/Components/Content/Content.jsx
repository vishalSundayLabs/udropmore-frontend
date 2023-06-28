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
import { GrPrevious } from "react-icons/gr"
import { FlipDate } from "../flipTimer/FlipDate";

const Content = () => {
    const userId = localStorage.getItem("userId");
    const navigate = useNavigate();
    const [auctions, setAuctions] = useState([])

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
        return () => { };
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
                            <img src="/img/Time Remaining.svg" width={"80%"} />
                            {/* <Timer
                interval={
                  new Date(item.endTime).getTime() -
                  new Date(item.startTime).getTime()
                }
              /> */}
                            <h1 className="text-2xl">
                                <FlipDate value={"70"} />
                            </h1>

                            <img
                                src="/img/WhatsApp Image 2023-06-06 at 15.40 4.svg"
                                width={"100%"}
                            />
                            <button className="font-semibold" style={{ fontSize: '14px' }} onClick={() => handleParticipate(item._id, userId)}>
                                Participate
                            </button>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default Content;

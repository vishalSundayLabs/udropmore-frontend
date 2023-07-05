import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ProductHeader from "../Product/ProductHeader";
import Timer from "../Timer/Timer";
import "./shopnow.scss";
import "./Product2.css";

const ShopNow = () => {
    const location = useLocation();
    const userId = localStorage.getItem("userId");
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const [product, setProduct] = useState({});
    const [auction, setAuction] = useState({});
    const [dropPrice, setDropPrice] = useState();
    const auctionId = queryParams.get("auctionId");
    const [dropTime, setDropTime] = useState();
    const [priceIndex, setPriceIndex] = useState(0);
    const [showTimer, setShowTimer] = useState();
    const fetchData = async () => {
        await axios({
            url: `https://dropmore-api.onrender.com/v1/product/get/by/id/${queryParams.get(
                "product"
            )}`,
            method: "get",
        })
            .then((response) => {
                setProduct(response.data.result.product);
                console.log("line 29 auction", response.data.result);
                setAuction(
                    response.data.result.auction.filter(
                        (item) => item._id == auctionId
                    )[0]
                );
                console.log("line 35", auction);
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

    const priceTimer = () => {
        if (auction?.priceDrop?.length > 0) {
            let index = 0;
            const interval = setInterval(async () => {
                for (let i = 0; i < auction.priceDrop.length; i++) {
                    const date1 = new Date(auction.priceDrop[i].timeStamp);
                    const date2 = new Date();
                    var date1Utc = new Date(date1.toISOString());
                    var date2Utc = new Date(date2.toISOString());
                    if (
                        new Date(
                            auction.priceDrop[i].timeStamp
                        ).toUTCString() == new Date().toUTCString()
                    ) {
                        index += 1;
                        setDropTime(priceIndex + 1);
                        setDropPrice(auction.priceDrop[i].newDropPrice);
                    }
                }
                return interval;
            }, 1000);
        }
    };

    useEffect(() => {
        const interval = priceTimer();
        return () => clearInterval(interval);
    }, [auction]);

    const handleOnClickBiding = () => {
        console.log("line 85", dropPrice);
        axios({
            url: `https://dropmore-api.onrender.com/v1/auction/bid/${auctionId}/${userId}`,
            method: "put",
            data: { bidAmount: dropPrice ? dropPrice : auction.dropStartPrice },
        })
            .then((response) => {
                alert(response.data.message);
                navigate("/congratulations");
            })
            .catch((error) => {
                alert(error);
                console.log(error);
            });
    };

    return (
        <>
            <Navbar />

            <div className="shopnow_wrapper">
                <div className="shopnow_container">
                    <div className="shopnow_content">
                        <div className="product_section">
                            <div className="product_img">
                                <img src="/img/product.png" alt="" />
                            </div>

                            <div className="right">
                                <p className="text-red-600 text-2xl">
                                    OnePlus Nord Lite
                                </p>
                                <p
                                    className="text-slate-200 text-2xl"
                                    style={{ marginTop: "25px" }}
                                >
                                    Estd . Price : ₹90,000
                                </p>
                            </div>
                        </div>
                        <p className="cur_price text-red-600">CURRENT PRICE DROP</p>
                        <div className="product_price flex justify-center">
                            <img src="/img/prodPrice.svg" alt="" />
                        </div>

                        <div className="check_container">
                            <div className="check flex ">
                                <img src="/img/checkCircle.svg" alt="" />

                                <div>
                                    <p
                                        className="text-white"
                                        style={{ fontSize: "32px" }}
                                    >
                                        20
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center mt-5">
                            <button
                                className="shop-now rounded-lg px-4 py-2 my-5 text-white cursor-pointer"
                                style={{
                                    width: "300px",
                                    fontWeight: "700",
                                    fontSize: "20px",
                                }}
                                onClick={handleOnClickBiding}
                            >
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ShopNow;

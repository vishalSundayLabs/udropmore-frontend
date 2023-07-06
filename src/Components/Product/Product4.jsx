import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Flip from "../flipTimer/Flip";
import { FlipDate } from "../flipTimer/FlipDate";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Timer from "../Timer/Timer";
import ProductHeader from "./ProductHeader";
import "./Product.css";
import Odometer from "react-odometerjs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product4 = () => {
  const location = useLocation();
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const [product, setProduct] = useState({});
  const [auction, setAuction] = useState({});
  const [dropPrice, setDropPrice] = useState();
  const auctionId = queryParams.get("auctionid");
  const productId = queryParams.get("productId");
  const [dropTime, setDropTime] = useState();
  const [priceIndex, setPriceIndex] = useState(0);
  const [showTimer, setShowTimer] = useState();
  const [isShow, setIsShow] = useState(false);
  const [lastOneMins, setLastOneMins] = useState(true);
  const [lastOneMinsCount, setLastOneMinsCount] = useState(59);
  const [priceLowPerSecond, setPriceLowPerSecond] = useState(0);
  let audio = new Audio("/music/beep.mp3");;
  //   if(localStorage.getItem("changePrice")){
  //     setDropPrice(localStorage.getItem("changePrice"))
  //   }

  const fetchData = async () => {
    await axios({
      url: `http://localhost:8080/v1/product/get/by/id/${productId}`,
      method: "get",
    })
      .then((response) => {
        setProduct(response.data.result.product);
        setAuction(
          response.data.result.auction.filter((item) => {
            if (item._id == auctionId) {
              return item;
            }
          })[0]
        );
        setIsShow(true);
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

  function getDateDifferenceInSeconds(date1 = new Date(), date2 = new Date()) {
    const diffInMilliseconds = Math.abs(
      new Date(date2).getTime() - new Date(date1).getTime()
    );
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
    return diffInSeconds;
  }
  const decriment =
    (Number(auction.dropStartPrice) - Number(auction.lowestDropPrice)) /
    getDateDifferenceInSeconds(auction?.endTime, auction?.startTime);

  let count = 60;
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
            new Date(auction.priceDrop[i].timeStamp).toUTCString() ==
            new Date().toUTCString()
          ) {
            setDropTime(priceIndex + 1);
            setDropPrice(auction.priceDrop[i].newDropPrice);
          }
        }
        return interval;
      }, 1000);
    }
  };

  //   useEffect(() => {
  //     const interval = priceTimer();
  //     return () => clearInterval(interval);
  //   }, [auction]);

  const handleOnClickBiding = () => {
    axios({
      url: `http://localhost:8080/v1/auction/bid/${auctionId}/${userId}`,
      method: "put",
      data: { bidAmount: dropPrice ? dropPrice : auction.dropStartPrice },
    })
      .then((response) => {
        toast.success(`${response.data.message}`, {
          position: toast.POSITION.TOP_RIGHT,
          theme: "dark",
        });
        navigate(
          `/congratulations2?auctionid=${auctionId}&productId=${productId}`
        );
      })
      .catch((error) => {
        toast.error(`${error.message}`, {
          position: toast.POSITION.TOP_RIGHT,
          theme: "dark",
        });
        console.log(error);
      });
  };

  let newPrice = auction.dropStartPrice ? auction.dropStartPrice : 0;

  useEffect(() => {
    const interval = setInterval(() => {
      if(audio){
        audio.play().catch((error) => {
            toast.error(`${error.message}`, {
              position: toast.POSITION.TOP_RIGHT,
              theme: "dark",
            });
          });
      }
      newPrice = parseFloat((newPrice - decriment.toFixed(2)).toFixed(2));
      setPriceLowPerSecond(newPrice);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [auction]);

  console.log("line 141", decriment, priceLowPerSecond);
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 gap-6">
          <div className="flex justify-center text-3xl rounded-xl my-32 md:mt32 product_img_container">
            <img src={product?.productPageImageUrl} className="product_img" />
          </div>
          <div className="flex justify-center text-3xl my-32 md:mb-32">
            <div
              className="flex flex-col align-h items-center h-96 w-full h-96  bg-cover bg-center"
              style={{ color: "black" }}
            >
              <div className="flex w-96 ">{/* <Flip value={5000} /> */}</div>
              <div
                className="flex flex-col align-h items-center h-screen w-full h-screer bg-cover bg-center"
                style={{ color: "black" }}
              >
                <div className="flex play-station2 flex-col">
                  <h1>{product.name}</h1>

                  <p
                    className="text-2xl font-semibold mt-2"
                    style={{ color: "#FFFFFF99" }}
                  >
                    Estd . Price : ₹ {product.marketPrice}
                  </p>
                </div>
                <div className="flex flex-col w-full mb-9 justify-center">
                  {/* <Flip
                    value={dropPrice ? dropPrice : auction.dropStartPrice}
                  /> */}
                  <Flip value={priceLowPerSecond} />
                  {/* <div></div>
                  <Odometer
                    value={dropPrice ? dropPrice : auction.dropStartPrice}
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      background: "#111111",
                      fontSize: "52px",
                    }}
                    duration={0.7}
                    format="(,ddd).dd"
                  /> */}
                </div>

                <div className="flex flex-col w-96 mb-9 justify-center">
                  <p className="timer-title mb-2 text-center">
                    {auction.status == "ACTIVE"
                      ? "Time Remaining"
                      : "Starts In"}
                  </p>
                  <h1 className="text-5xl w-96 sm:w-64 md:w-64">
                    {isShow ? (
                      auction.status == "ACTIVE" ? (
                        <FlipDate
                          value={auction.endTime}
                          width={35}
                          height={50}
                          fontSize={35}
                        />
                      ) : (
                        <FlipDate
                          value={auction.startTime}
                          width={35}
                          height={50}
                          fontSize={35}
                        />
                      )
                    ) : (
                      ""
                    )}
                  </h1>
                </div>

                {/* <div className="check flex justify-center mt-5 mb-7">
                    <img src="/img/checkCircle.svg" alt="" />
                    <div>
                      <p
                        className="text-white "
                        style={{ fontSize: "52px", fontWeight: 500 }}
                      >
                        {lastOneMinsCount}
                      </p>
                    </div>
                  </div> */}

                <button
                  className="shop-now rounded-lg px-4 py-2 my-5 text-white cursor-pointer"
                  disabled={auction.status == "ACTIVE" ? false : true}
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
      </div>
      <Footer />
    </>
  );
};

export default Product4;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Flip from "../flipTimer/Flip";
import { FlipDate } from "../flipTimer/FlipDate";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Timer from "../Timer/Timer";
import ProductHeader from "./ProductHeader";
import Odometer from 'react-odometerjs';

const Product4 = () => {
  const location = useLocation();
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const [product, setProduct] = useState({});
  const [auction, setAuction] = useState({});
  const [dropPrice, setDropPrice] = useState();
  const auctionId = queryParams.get("auctionid");
  const [dropTime, setDropTime] = useState();
  const [priceIndex, setPriceIndex] = useState(0);
  const [showTimer, setShowTimer] = useState();
  const [isShow, setIsShow] = useState(false);
  const [lastOneMins, setLastOneMins] = useState(true);
  const [lastOneMinsCount, setLastOneMinsCount] = useState(59);

  //   if(localStorage.getItem("changePrice")){
  //     setDropPrice(localStorage.getItem("changePrice"))
  //   }

  const fetchData = async () => {
    await axios({
      url: `http://localhost:8080/v1/product/get/by/id/${queryParams.get(
        "productId"
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
        setIsShow(true);
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
        // let endTimes = new Date(auction.endTime);
        // let currentTime = new Date();
        // var dateEndUtc = new Date(endTimes.toISOString());
        // var dateCurrentUtc = new Date(currentTime.toISOString());
        // const lastOneMins =
        //   new Date(dateEndUtc).getTime() - new Date(dateCurrentUtc).getTime() >
        //   600000
        //     ? true
        //     : false;
        // if (
        //   new Date(dateEndUtc).getTime() - new Date(dateCurrentUtc).getTime() >
        //   60000
        // ) {
        //   count -= 1;
        //   setLastOneMinsCount(count);
        // }
        // console.log("line 80", lastOneMins);
        // setLastOneMins(lastOneMins);
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
      url: `http://localhost:8080/v1/auction/bid/${auctionId}/${userId}`,
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
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 gap-6">
          <div className="flex justify-center text-3xl rounded-xl my-32 md:mt32">
            <img src="/img/1.jpeg" className="product_img" />
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
                    value={dropP
                        rice ? dropPrice : auction.dropStartPrice}
                  /> */}
                  <div></div>
                   <Odometer value={dropPrice ? dropPrice : auction.dropStartPrice} style={{ cursor: 'pointer' ,display:'flex',flexDirection:"row",justifyContent:"center",background:"#111111",fontSize:"52px"}} duration={0.7} format="(,ddd).dd" />
                </div>
    
                  <div className="flex flex-col w-96 mb-9 justify-center">
                    <p className="timer-title mb-2 text-center">
                      {auction.status == "ACTIVE"
                        ? "Remaining Time"
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
                   disabled ={auction.status=="ACTIVE" ? false : true}
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

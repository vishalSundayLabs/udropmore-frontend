import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import ProductHeader from "../Product/ProductHeader";
import Timer from "../Timer/Timer";
import "./Product2.css";

const Product2 = () => {
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
            new Date(auction.priceDrop[i].timeStamp).toUTCString() ==
            new Date().toUTCString()
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
      <ProductHeader />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 gap-6">
          <div className="flex justify-center text-3xl rounded-xl my-32 md:mt32 product_img_container ">
            <img src="/img/product.png" />
          </div>
          <div className="flex justify-center text-3xl my-32 md:mb-32 min-[200]:my-0">
            <div
              className="flex flex-col align-h items-center h-96 w-full h-96  bg-cover bg-center"
              style={{ color: "black" }}
            >
              <div
                className="flex flex-col align-h items-center h-screen w-full h-screer bg-cover bg-center"
                style={{ color: "black" }}
              >
                <div className="flex flex-col text-[red] gap-2">
                  <h1>{product.name}</h1>
                  <p className="text-[grey] text-lg text-center mb-8">
                    Estd . Price : ₹ {product.marketPrice}
                  </p>
                </div>

                <div className="flex mb-4 gap-6 mb-12">
                  {/* <img src="/img/pricebox.png" alt="" /> */}
                  <h1 className="text-5xl text-white text-bold">
                    {dropPrice ? dropPrice : auction.dropStartPrice}
                  </h1>
                </div>

                <div className="flex flex-col mb-4 gap-6 mb-12">
                  {/* {
                     true == true ?  <>
                     <h1 className="text-[red] font-extrabold">Remaining Time</h1>
                     <Timer
                       interval={
                         new Date(auction.startTime).valueOf() -
                         new Date().valueOf()
                       }
                     />
                     </> : <>
                     <h1 className="text-gray-400 font-extrabold">Start In</h1>
                     <Timer
                       interval={
                         new Date(auction.startTime).valueOf() -
                         new Date().valueOf()
                       }
                     />
                     </>
                  } */}
                  {/* <img src="/img/circle.png" alt="" /> */}
                </div>
                <button
                  onClick={handleOnClickBiding}
                  className="shop-now rounded-lg w-75 px-10 py-1 text-white cursor-pointer"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:my-20 lg:my-0 md:my-20 my-20"></div>
      <Footer />
    </>
  );
};

export default Product2;

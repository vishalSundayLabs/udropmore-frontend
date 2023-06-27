import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import ProductHeader from "../Product/ProductHeader";
import Timer from "../Timer/Timer";
import "./Product2.css";

const Product2 = () => {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const [product, setProduct] = useState({});
  const [auction, setAuction] = useState({});
  const [dropPrice, setDropPrice] = useState();
  const [dropTime, setDropTime] = useState();
  const [priceIndex, setPriceIndex] = useState(0);
  const [showTimer, setShowTimer] = useState();
  const fetchData = async () => {
    await axios
      .get(
        `http://localhost:8080/v1/product/get/by/id/${queryParams.get(
          "product"
        )}`
      )
      .then((response) => {
        setProduct(response.data.result.product);
        setAuction(response.data.result.auction);
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
      // setDropPrice(auction.priceDrop[priceIndex].newDropPrice);
      let index = 0;
      const interval = setInterval(async () => {
        for (let i = 0; i < auction.priceDrop.length; i++) {
          const date1 = new Date(auction.priceDrop[i].timeStamp);
          const date2 = new Date();
          var date1Utc = new Date(date1.toISOString());
          var date2Utc = new Date(date2.toISOString());
          console.log(
            "line 54",
            new Date(date1.toISOString()),
            new Date(date2.toISOString()),
            date1Utc.getTime() == date2Utc.getTime()
          );
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

  return (
    <>
      <ProductHeader />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 gap-6">
          <div className="flex justify-center text-3xl rounded-xl my-32 md:mt32">
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
                  {/* {new Date(auction.startTime).valueOf() -
                    new Date().valueOf() <=
                  0 ? (
                    <>
                      <h1 className="text-[red] font-extrabold">
                        Remaining Time
                      </h1>
                      <Timer
                        interval={
                          new Date(auction.endTime).valueOf() -
                          new Date().valueOf()
                        }
                      />
                    </>
                  ) : (
                    <>
                      <h1 className="text-gray-400 font-extrabold">Start In</h1>
                      <Timer
                        interval={
                          new Date(auction.startTime).valueOf() -
                          new Date().valueOf()
                        }
                      />
                    </>
                  )} */}
                  {/* <img src="/img/circle.png" alt="" /> */}
                </div>
                <button className="shop-now rounded-lg w-75 px-10 py-1 text-white cursor-pointer">
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

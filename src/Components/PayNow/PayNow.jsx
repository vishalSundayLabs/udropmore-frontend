import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import ProductHeader from "../Product/ProductHeader";
import "./PayNow.css";

const PayNow = () => {
  return (
    <>
      <ProductHeader />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 gap-6">
          <div className="flex justify-center text-3xl rounded-xl my-32 md:mt32">
            <img src="/img/Saly-35.png" />
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
                  <h1 className="font-extrabold text-center">
                    Congratulations!
                  </h1>
                  <p className="text-[grey] text-lg text-center mb-8">
                    You have won this drop
                  </p>
                </div>

                <div
                  className="flex flex-col align-h items-center h-screen w-full h-screer bg-cover bg-center"
                  style={{ color: "black" }}
                >
                  <div className="flex mb-4 gap-6  ">
                    <div className="properties-element flex flex-col gap-4 w-3/6 border-2 border-solid border-grey-800 justify-center border-r-2 border-l-0 border-t-0 border-b-0 h-24 lg:w-64 md:w-64 sm:w-64">
                      <p>You Saved</p>
                      <span className="text-left text-white font-extrabold text-lg">
                        ₹15,204
                      </span>
                    </div>
                    <div className="properties-element flex flex-col  gap-4 w-60  justify-center h-24 lg:w-64 md:w-64 sm:w-64">
                      <p>You Only Pay</p>
                      <span className="text-left text-white font-extrabold text-lg">
                        ₹54,204
                      </span>
                    </div>
                  </div>
                  <button className="shop-now rounded-lg w-75 px-10 py-1 my-10 text-white cursor-pointer">
                    Pay now
                  </button>
                  <button className=" rounded-lg w-75 px-10 py-1 text-white cursor-pointer">
                    Pay Later
                  </button>
                </div>
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

export default PayNow;

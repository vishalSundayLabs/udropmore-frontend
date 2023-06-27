import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import ProductHeader from "../Product/ProductHeader";
import "./Product2.css";

const Product2 = () => {
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
                  <h1>One plus nord</h1>
                  <p className="text-[grey] text-lg text-center mb-8">
                    Estd . Price : ₹40,000
                  </p>
                </div>

                <div className="flex mb-4 gap-6 mb-12">
                  <img src="/img/pricebox.png" alt="" />
                </div>

                <div className="flex mb-4 gap-6 mb-12">
                  <img src="/img/circle.png" alt="" />
                </div>
                <button className="shop-now rounded-lg w-75 px-10 py-1 text-white cursor-pointer">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:my-20 lg:my-0 md:my-20 my-20">
      </div>
      <Footer />
    </>
  );
};

export default Product2;

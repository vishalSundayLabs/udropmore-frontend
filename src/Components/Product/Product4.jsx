import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Timer from "../Timer/Timer";
import ProductHeader from "./ProductHeader";

const Product4 = () => {
    return (
        <>
           <Navbar/>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 gap-6">
                    <div className="flex justify-center text-3xl rounded-xl my-32 md:mt32">
                        <img src="/img/product.png" className="product_img" />
                    </div>
                    <div className="flex justify-center text-3xl my-32 md:mb-32">
                        <div
                            className="flex flex-col align-h items-center h-96 w-full h-96  bg-cover bg-center"
                            style={{ color: "black" }}
                        >
                            <div className="flex w-96 ">
                                {/* <Timer inter={9000000}/> */}
                            </div>
                            <div className="flex w-full justify-around mb-4  align-h">
                                <div className="price-box h-24   ">
                                    <p>Market Price</p>
                                    <p>₹72,000</p>
                                </div>
                                <div className="price-box h-24  test-base">
                                    <p>Drop Starts</p>
                                    <p>₹62,245</p>
                                </div>
                                <div className="price-box h-24  test-base ">
                                    <p>Entry Fee</p>
                                    <p>₹62,255</p>
                                </div>
                            </div>
                            <div
                                className="flex flex-col align-h items-center h-screen w-full h-screer bg-cover bg-center"
                                style={{ color: "black" }}
                            >
                                <div className="flex play-station">
                                    <h1>One plus nord</h1>
                                </div>

                                <div className="product_points">
                                    <div className="points_container">
                                        <div className="flex mb-6 gap-7">
                                            <div className="point flex gap-2">
                                                <img src="/img/productPoint.svg" alt="" />
                                                <p className="text-white">Dual Shock Sensor</p>
                                            </div>
                                            <div className="point flex gap-2">
                                                <img src="/img/productPoint.svg" alt="" />
                                                <p className="text-white">3D audio</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-7 mb-8">
                                            <div className="point flex gap-2">
                                                <img src="/img/productPoint.svg" alt="" />
                                                <p className="text-white">VR Set Compatible</p>
                                            </div>
                                            <div className="point flex gap-2">
                                                <img src="/img/productPoint.svg" alt="" />
                                                <p className="text-white">Precision Tracking</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    className="shop-now rounded-lg px-4 py-2 my-5 text-white cursor-pointer"
                                    disabled
                                    style={{width:'300px', fontWeight: '700', fontSize:'20px'}}
                                >
                                    Participate
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

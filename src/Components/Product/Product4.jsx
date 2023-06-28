import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Timer from "../Timer/Timer";
import ProductHeader from "./ProductHeader";

const Product4 = () => {
    return (
        <>
            <Navbar />
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
                            <div
                                className="flex flex-col align-h items-center h-screen w-full h-screer bg-cover bg-center"
                                style={{ color: "black" }}
                            >
                                <div className="flex play-station2 flex-col">
                                    <h1>One plus nord</h1>

                                    <p className="text-2xl font-semibold mt-2" style={{ color: '#FFFFFF99' }}>Estd . Price : ₹40,000</p>
                                </div>

                                <div className="check flex justify-center mt-5 mb-7">
                                    <img src="/img/checkCircle.svg" alt="" />
                                    <div>
                                        <p className="text-white " style={{fontSize: '52px', fontWeight: 500}}>20</p>
                                    </div>
                                </div>

                                <button
                                    className="shop-now rounded-lg px-4 py-2 my-5 text-white cursor-pointer"
                                    disabled
                                    style={{ width: '300px', fontWeight: '700', fontSize: '20px' }}
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

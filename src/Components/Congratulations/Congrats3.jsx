import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Congrats3.scss";

const Congrats3 = () => {
    return (
        <>
            <Navbar />
            <div className="cong3_wrapper mt-16">
                <div className="cong3_container">
                    <div className="cong3_main">
                        <div className="left">
                            <img src="/img/cong3.svg" alt="" />
                        </div>

                        <div className="right">
                            <div className="text-center">
                                <p
                                    className="font-bold text-white"
                                    style={{ fontSize: "32px" }}
                                >
                                    Rank #1
                                </p>
                                <p
                                    className="font-bold text-red-600"
                                    style={{ fontSize: "42px" }}
                                >
                                    Congratulations!
                                </p>
                                <p
                                    className="text-lg font-medium"
                                    style={{ color: "#FFFFFFCC" }}
                                >
                                    You have won{" "}
                                    <span className="font-semibold">
                                        IPhone 12
                                    </span>
                                </p>
                            </div>

                            <div className="money_section">
                                <div className="money_left">
                                    <p className="text-white font-medium text-2xl mb-3">
                                        You Saved
                                    </p>
                                    <p className="fs-32 font-bold text-white">
                                        ₹15,204
                                    </p>
                                </div>
                                <div className="money_center"></div>
                                <div className="money_right">
                                    <p className="text-white font-medium text-2xl mb-3">
                                        You Only Pay
                                    </p>
                                    <p className="fs-32 font-bold text-white">
                                        ₹54,204
                                    </p>
                                </div>

                            </div>
                                <div className="pay_btn mt-12">
                                    <div className="add_money profile_submit mt-6">
                                        <button type="submit">
                                            Pay Now
                                        </button>
                                        <p className="text-white mt-2">Pay Later</p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Congrats3;

import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Congrats.scss";
const Congratulations = () => {
    return (
        <>
            <Navbar />
            <div className="header-bg">
                <div className="congrats_image flex justify-between items-center">
                    <img src="/img/cong.svg" alt="" />
                    <img src="/img/cong2.svg" alt="" />
                </div>
            </div>

            <div className="congrats_wrapper">
                <div className="congrats_container mt-20">
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
                            Congratulations
                        </p>
                        <p
                            className="text-lg font-medium"
                            style={{ color: "#FFFFFFCC" }}
                        >
                            You have won this drop
                        </p>
                    </div>

                    <div className="check flex justify-center mt-5">
                        <img src="/img/checkCircle.svg" alt="" />

                        <div>
                            <img src="/img/check.svg" alt="" />
                        </div>
                    </div>

                    <div className="pay_btn mt-12">
                        <div className="add_money profile_submit mt-6">
                            <button type="submit">Go to Pay Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Congratulations;

import React from "react";
import "./Footer.css";
import { BiPhoneCall } from "react-icons/bi";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer_container">
            <div className="footer">
                <div className="footer_wrapper">
                    <img src="/img/Drop More Final Logo.svg" />
                    <p className="my-6 mb-8 hide">
                        Introducing India’s First Reverse Drop Auction Shopping
                        <br />
                        Shop More Save More Thrill More
                    </p>
                    <p className="my-6 mb-8 responsive_text toggleShow">
                        Introducing India’s First Reverse Drop Auction Shopping
                        Shop More Save More Thrill More
                    </p>

                    <div className="footer_last toggleShow mb-4">
                        <div className="security">
                            <p className="text-center mb-4">
                                Security & Certificates
                            </p>
                            <img src="/img/security.svg" alt="" />
                        </div>
                        <div className="payment mt-7">
                            <p className="text-center mb-4">Payment options</p>
                            <img src="/img/payment.svg" alt="" />
                        </div>
                    </div>

                    <div className="footer-click hide">
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Press Release</p>
                        <p>Blogs</p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <h4 className="text-center mb-2 -ml-2">Contact US :</h4>
                    <p className="flex items-center">
                        {" "}
                        <span className="mr-3">
                            <BiPhoneCall />
                        </span>{" "}
                        +91 9876543210
                    </p>
                    <p className="flex items-center">
                        {" "}
                        <span className="mr-3">
                            <FaEnvelope />
                        </span>{" "}
                        abc@gmail.com
                    </p>

                    <div className="social_container mt-12">
                        <h4 className="text-center mb-5 -ml-2">
                            Follow us on:
                        </h4>
                        <div style={{ display: "flex", gap: "1rem" }}>
                            <div className="logo-bg social_icon">
                                <img src="/img/Vector (1).svg" />
                            </div>
                            <div className="logo-bg social_icon">
                                <img src="/img/Group 6.svg" />
                            </div>
                            <div className="logo-bg social_icon">
                                <img src="/img/Group 8.svg" />
                            </div>
                            <div className="logo-bg social_icon">
                                <img src="/img/Group 20.svg" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_last hide">
                    <div className="security">
                        <p className="text-center mb-4">
                            Security & Certificates
                        </p>
                        <img src="/img/security.svg" alt="" />
                    </div>
                    <div className="payment mt-7">
                        <p className="text-center mb-4">Payment options</p>
                        <img src="/img/payment.svg" alt="" />
                    </div>
                </div>


                <div className="footer-click toggleShow mt-4 text-center">
                    <p className="mb-2">About Us</p>
                    <p className="mb-2">Careers</p>
                    <p className="mb-2">Press Release</p>
                    <p className="mb-2">Blogs</p>
                </div>
                
            </div>
            <p className="text-xs text-end hide" style={{color: "#825BFF"}}>© 2022-2023 U-Drop All Rights Reserved.</p>
            <p className="text-xs text-center toggleShow" style={{color: "#825BFF"}}>© 2022-2023 U-Drop All Rights Reserved.</p>
        </div>
    );
};

export default Footer;

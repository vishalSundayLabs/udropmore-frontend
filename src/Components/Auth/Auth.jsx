"use client";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import axios from "axios";

const Auth = () => {
    const navigate = useNavigate();
    const [phoneNumber, setPhoneNumber] = useState();

    const [otp, setOtp] = useState({
        otp1: "",
        otp2: "",
        otp3: "",
        otp4: "",
    });
    const [showPage, setShowPage] = useState(true);

    const handleOnChangePhoneNumber = (e) => {
        e.preventDefault();
        setPhoneNumber(e.target.value);
    };

    const handleOnChangeOtp = (e) => {
        e.preventDefault();
        setOtp({ ...otp, [e.target.name]: e.target.value });
        console.log({ ...otp, [e.target.name]: e.target.value });
    };

    const handleOnClickSendOtp = async (e) => {
        e.preventDefault();
        await axios({
            method: "post",
            url: `http://localhost:8080/v1/auth/sendotp`,
            data: { phoneNumber: phoneNumber },
        })
            .then((response) => {
                console.log(response);
                alert(response.data);
                setShowPage(false);
            })
            .catch((error) => {
                alert(error);
            });
    };



    const handleOnClickOtp = async (e) => {
        e.preventDefault();
        console.log(otp.otp1 + otp.otp2 + otp.otp3 + otp.otp4);
        await axios({
            method: "post",
            url: `http://localhost:8080/v1/auth/verifyOtp`,
            data: {
                phoneNumber: phoneNumber,
                otp: Number(otp.otp1 + otp.otp2 + otp.otp3 + otp.otp4),
            },
        })
            .then((response) => {
                console.log(response.data.message);
                alert(response.data.message);
                if (response.data.success) {
                    localStorage.setItem("token", response.data.result.accessToken);
                    localStorage.setItem("userId", response.data.result.user._id);
                    navigate("/");
                }
            })
            .catch((error) => {
                alert(error);
            });
    };

    return (
        <div>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="/img/Drop More Final Logo.svg"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray extra-class">
                        Start exploring Drops now
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    {showPage ? (
                        <div className="space-y-6 login_wrapper">
                           <div className="login_container">
                                <div>
                                    <div className="mt-0 mb-4">
                                        <input
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            type="number"
                                            autocomplete="phoneNumber"
                                            placeholder="Enter your phone number"
                                            required
                                            className="extra-input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-grey-600 sm:text-sm sm:leading-6"
                                            value={phoneNumber}
                                            onChange={handleOnChangePhoneNumber}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="extra-btn flex w-full justify-center rounded-md bg-grey-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-grey-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grey-600"
                                        onClick={handleOnClickSendOtp}
                                    >
                                        Login to explore Drops
                                    </button>
                                </div>
                           </div>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            <div>
                                <div className="mt-2 otp-input">
                                    <input
                                        id="phoneNumber"
                                        name="otp1"
                                        type="text"
                                        autocomplete="phoneNumber"
                                        placeholder=""
                                        required
                                        className="extra-input ml-2 mr-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                        value={otp.otp1}
                                        onChange={handleOnChangeOtp}
                                    />
                                    <input
                                        id="phoneNumber"
                                        name="otp2"
                                        type="text"
                                        autocomplete="phoneNumber"
                                        placeholder=""
                                        required
                                        value={otp.otp2}
                                        onChange={handleOnChangeOtp}
                                        className="extra-input mr-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                    />
                                    <input
                                        id="phoneNumber"
                                        name="otp3"
                                        type="text"
                                        autocomplete="phoneNumber"
                                        placeholder=""
                                        required
                                        value={otp.otp3}
                                        onChange={handleOnChangeOtp}
                                        className="extra-input mr-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                                    />
                                    <input
                                        id="phoneNumber"
                                        name="otp4"
                                        type="text"
                                        autocomplete="phoneNumber"
                                        placeholder=""
                                        required
                                        value={otp.otp4}
                                        onChange={handleOnChangeOtp}
                                        className="extra-input mr-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="extra-btn flex w-full justify-center rounded-md bg-grey-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-grey-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grey-600"
                                    onClick={handleOnClickOtp}
                                >
                                    Login to explore Drops
                                </button>
                            </div>
                        </div>
                    )}

                    <p className="mt-10 text-center text-sm text-gray-500">
                        <a
                            href="#"
                            className="font-semibold leading-6 text-white-600 hover:text-white-500"
                        >
                            By clicking on button you agreeing to{" "}
                            <strong className="text-white">Terms & Conditions</strong>.
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Auth;

"use client";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { config } from "../../Configs/Config";

const Auth = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState();
  const [isValid, setIsValid] = useState();

  const handleOnChangePhoneNumber = (e) => {
    e.preventDefault();
    const inputPhone = e.target.value;
    if (inputPhone.length <= 10) {
      setPhoneNumber(inputPhone);
    }
  };

  const handleValidation = (e) => {
    e.preventDefault();
    const inputPhone = e.target.value;
    const phoneRegex = /^\d{10}$/; // 10 digits only
    const isValidPhoneNumber = phoneRegex.test(inputPhone);
    setIsValid(isValidPhoneNumber);
  };

  const handleOnClickSendOtp = async (e) => {
    e.preventDefault();
    await axios({
      method: "post",
      url: `${config()}/v1/auth/sendotp`,
      data: { phoneNumber: phoneNumber },
    })
      .then((response) => {
        console.log(response);
        toast.success(`OTP sent to ${phoneNumber} .`, {
          position: toast.POSITION.TOP_RIGHT,
          theme: "dark",
        });
        localStorage.setItem("phone", phoneNumber);
        navigate("/verify/otp");
      })
      .catch((error) => {
        toast.error(`${error.message}`, {
          position: toast.POSITION.TOP_RIGHT,
          theme: "dark",
        });
      });
  };

  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link to={"/"}>
            <img
              className="mx-auto h-10 w-auto"
              src="/img/Drop More Final Logo.svg"
              alt="Your Company"
            />
          </Link>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray extra-class">
            Start exploring Drops now
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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
                    maxLength={10}
                    onChange={handleOnChangePhoneNumber}
                    onBlur={handleValidation}
                  />
                  {isValid == undefined ? (
                    ""
                  ) : isValid == true ? (
                    <p className="valid text-[green]">* Valid phone number!</p>
                  ) : (
                    <p className="invalid text-[red]">
                      * Please enter a valid 10-digit phone number.
                    </p>
                  )}
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="extra-btn flex w-full justify-center rounded-md bg-grey-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-grey-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grey-600"
                  onClick={handleOnClickSendOtp}
                  disabled={isValid ? false : true}
                >
                  Login to explore Drops
                </button>
              </div>
            </div>
          </div>
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

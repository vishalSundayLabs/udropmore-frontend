import React, { useState } from "react";
import "./Profile.scss";
import profileImg from "../../assets/imgs/profile.svg";
import Navbar from "../Navbar/Navbar";
import InputField from "../InputField/InputField";
import useInputChange from "../../hooks/useInputChange";
import Footer from "../Footer/Footer";

const Profile = () => {

    const { values, handleChange } = useInputChange({
        name: '',
        email: '',
        phone: '',
        shippingAddress: '',
      });

      const handleSubmit = (e) => {
        e.preventDefault()
      }

    return (
        <div>
            <Navbar />

            <div className="profile_wrapper flex items-center justify-center mt-12">
                <div className="profile_container">
                    <p className="text-5xl text-red-600 font-bold mt-5 text-center">
                        My Profile
                    </p>

                    <div className="profile_img mt-10 text-center">
                        <img src={profileImg} alt="" className="m-auto" />
                    </div>

                    <div className="profile_form m-auto mt-12">
                        <form action="" className="" onSubmit={handleSubmit}>
                            <div className="input_container mb-10 flex justify-center" style={{gap: "40px"}}>
                                <InputField
                                    label={"Name"}
                                    name={'name'}
                                    value={values.name}
                                    type="text"
                                    placeholder={"Enter your name"}
                                    onChange={handleChange}
                                />
                                <InputField
                                    label={"Email Address"}
                                    name="email"
                                    value={values.email}
                                    type="text"
                                    placeholder={"Enter email address"}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input_container flex justify-center" style={{gap: "40px"}}>
                                <InputField
                                    label={"Phone Number"}
                                    name="phone"
                                    value={values.phone}
                                    type="text"
                                    placeholder={"Enter phone number"}
                                    onChange={handleChange}
                                />
                                <InputField
                                    label={"Shipping Address"}
                                    name="shippingAddress"
                                    value={values.shippingAddress}
                                    type="text"
                                    placeholder={"Enter your shipping address"}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="profile_submit mt-10">
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default Profile;

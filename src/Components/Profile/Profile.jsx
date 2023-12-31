import React, { useState, useEffect } from "react";
import "./Profile.scss";
import profileImg from "../../assets/imgs/profile.svg";
import Navbar from "../Navbar/Navbar";
import InputField from "../InputField/InputField";
import useInputChange from "../../hooks/useInputChange";
import Footer from "../Footer/Footer";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { config } from "../../Configs/Config";

const Profile = () => {

  const userId = localStorage.getItem("userId");

  const [user, setUser] = useState({
    firstName: "",
    email: "",
    phoneNumber: "",
    address: "",
    profileImg:""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateUser();
  };

  useEffect(() => {
    axios.get(`${config()}/v1/users/${userId}`).then((res) => {
      if (res.data.result) {
        setUser(res.data.result)
      }
    });

    return () => {};
  }, []);

  const handleChange = (event) => {
    event.preventDefault()
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
};

  const handleUpdateUser = () => {
    axios({
      method: "put",
      url: `${config()}/v1/users/update/${userId}`,
      data: user,
    }).then((res) => {
      if (res.data.result) {
           setUser(res.data.result)
      }
      toast.success(res.data.message, {
        position: toast.POSITION.TOP_RIGHT,
        theme: "dark",
      });
    }).catch((error)=>{
        toast.error(`${error.message}`, { position: toast.POSITION.TOP_RIGHT ,theme: "dark",});
    });
  };

  return (
    <div>
      <Navbar />
      <div className="profile_wrapper flex items-center justify-center mt-12">
        <div className="profile_container">
          <p className="text-5xl text-red-600 font-bold mt-5 text-center">
            My Profile
          </p>

          <div className="profile_img mt-10 text-center">
            <img src={user.profileImg} alt="" className="m-auto" />
          </div>

          <div className="profile_form m-auto mt-12">
            <form action="" className="" onSubmit={handleSubmit}>
              <div
                className="input_container mb-10 flex justify-center"
                style={{ gap: "40px" }}
              >
                <InputField
                  label={"Name"}
                  name={"firstName"}
                  value={user.firstName}
                  type="text"
                  placeholder={"Enter your name"}
                  onChange={handleChange}
                />
                <InputField
                  label={"Email Address"}
                  name="email"
                  value={user.email}
                  type="text"
                  placeholder={"Enter email address"}
                  onChange={handleChange}
                />
              </div>
              <div
                className="input_container flex justify-center"
                style={{ gap: "40px" }}
              >
                <InputField
                  label={"Phone Number"}
                  name="phoneNumber"
                  value={user.phoneNumber}
                  type="text"
                  placeholder={"Enter phone number"}
                  onChange={handleChange}
                />
                <InputField
                  label={"Shipping Address"}
                  name="address"
                  value={user.address}
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

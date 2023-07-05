import React from "react";
import "./AddMoney.scss";
import Navbar from "../Navbar/Navbar";
import balance from "../../assets/imgs/balance.svg";
import addAmt from "../../assets/imgs/addAmt.svg";
import Footer from "../Footer/Footer";

const AddMoney = () => {
    return (
        <div>
            <Navbar />

            <div className="addmoney_wrapper profile_wrapper flex items-center justify-center mt-16">
                <div className="addmoney_container profile_container">
                    <p className="text-5xl text-red-600 font-bold mt-5 text-center">
                        Add Money
                    </p>

                    <div className="amount_container flex justify-center mt-6">
                        <div className="amount">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="amount_btn text-white">
                        <button>₹1,000</button>
                        <button>₹2,000</button>
                        <button className="selected_amt">₹5,000</button>
                        <button>₹10,000</button>
                    </div>

                    <div className="add_money" style={{marginTop: '35px'}}>
                        <button
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default AddMoney;

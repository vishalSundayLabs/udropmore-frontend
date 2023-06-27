import React from "react";
import useInputChange from "../../hooks/useInputChange";
import InputField from "../InputField/InputField";
import "./Wallet.scss";
import Navbar from "../Navbar/Navbar";
import { FlipDate } from "../flipTimer/FlipDate";
import { FlipMoney } from "../flipTimer/FlipMoney";
import balance from "../../assets/imgs/balance.svg";

const Wallet = () => {
    return (
        <div>
            <Navbar />

            <div className="wallet_wrapper profile_wrapper flex items-center justify-center mt-12">
                <div className="wallet_container profile_container">
                    <p className="text-5xl text-red-600 font-bold mt-5 text-center">
                        My Wallet
                    </p>

                    
                </div>
            </div>
        </div>
    );
};

export default Wallet;

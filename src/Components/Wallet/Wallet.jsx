import React from "react";
import useInputChange from "../../hooks/useInputChange";
import InputField from "../InputField/InputField";
import "./Wallet.scss";
import Navbar from "../Navbar/Navbar";
import { FlipDate } from "../flipTimer/FlipDate";
import { FlipMoney } from "../flipTimer/FlipMoney";
import balance from "../../assets/imgs/balance.svg";
import addAmt from "../../assets/imgs/addAmt.svg"

const Wallet = () => {
    return (
        <div>
            <Navbar />

            <div className="wallet_wrapper profile_wrapper flex items-center justify-center mt-12">
                <div className="wallet_container profile_container">
                    <p className="text-5xl text-red-600 font-bold mt-5 text-center">
                        My Wallet
                    </p>

                    <div className="flex justify-center items-center mt-5 flex-col">
                        <img src="/img/balance.svg" width={205} />
                        
                        <div className="mt-6">
                            <img src={balance} alt="" />
                        </div>

                        <div className="add_money profile_submit mt-6">
                            <button type="submit">Add Money</button>
                        </div>
                    </div>

                    <div className="transactions">
                        <div className="head flex justify-between mt-12">
                            <p className="text-white text-xl">Transaction History</p>
                            <p className="font-light text-sm text-red-600 underline">View All</p>
                        </div>

                        <div className="transaction_info mt-6">
                            <div className="info">
                                <div className="info_left">
                                    <div className="left_img"><img src={addAmt} alt="" /></div>
                                    <span>Add Amount</span>
                                </div>

                                <div className="info_right">
                                    <div className="amount">₹4000</div>
                                    <div className="date font-light mt-3" style={{fontSize: '9px'}}>23-July-2023 10:00 AM</div>
                                </div>
                            </div>
                            <div className="info">
                                <div className="info_left">
                                    <div className="left_img"><img src={addAmt} alt="" /></div>
                                    <span>Add Amount</span>
                                </div>

                                <div className="info_right">
                                    <div className="amount">₹4000</div>
                                    <div className="date font-light mt-3" style={{fontSize: '9px'}}>23-July-2023 10:00 AM</div>
                                </div>
                            </div>
                            <div className="info">
                                <div className="info_left">
                                    <div className="left_img"><img src={addAmt} alt="" /></div>
                                    <span>Add Amount</span>
                                </div>

                                <div className="info_right">
                                    <div className="amount">₹4000</div>
                                    <div className="date font-light mt-3" style={{fontSize: '9px'}}>23-July-2023 10:00 AM</div>
                                </div>
                            </div>
                            <div className="info">
                                <div className="info_left">
                                    <div className="left_img"><img src={addAmt} alt="" /></div>
                                    <span>Add Amount</span>
                                </div>

                                <div className="info_right">
                                    <div className="amount">₹4000</div>
                                    <div className="date font-light mt-3" style={{fontSize: '9px'}}>23-July-2023 10:00 AM</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wallet;

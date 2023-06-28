import React, { useState } from "react";
import useInputChange from "../../hooks/useInputChange";
import InputField from "../InputField/InputField";
import "./Wallet.scss";
import Navbar from "../Navbar/Navbar";
import { FlipDate } from "../flipTimer/FlipDate";
import { FlipMoney } from "../flipTimer/FlipMoney";
import balance from "../../assets/imgs/balance.svg";
import addAmt from "../../assets/imgs/addAmt.svg";
import deductAmt from "../../assets/imgs/deductAmt.svg";
import PaginatedItems from "../Pagination/Pagination";

const Wallet = () => {
    //              items={transactions}
    //             itemsPerPage={pageSize}
    //             setitemsPerPage={setPageSize}
    //             currentPage={currPage}
    //             setcurrentPage={setCurrPage}
    //             totalPages={totalPages}

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(4);
    const [itemsPerPage, setitemsPerPage] = useState(10);

    return (
        <div>
            <Navbar />

            <div className="wallet_wrapper profile_wrapper flex items-center justify-center flex-col">
                <div className="wallet_container profile_container">
                    <p className="wallet_head text-4xl text-red-600 font-bold mt-5 text-center">
                        My Wallet
                    </p>

                    <div className="flex justify-center items-center mt-5 flex-col">
                        <p className="current_bal text-red-600">
                            CURRENT BALANCE
                        </p>

                        <div className="mt-6">
                            <img src={balance} alt="" />
                        </div>

                        <div className="add_money profile_submit mt-6">
                            <button type="submit">Add Money</button>
                        </div>
                    </div>

                    <div className="transactions p-3">
                        <div className="head flex justify-between ">
                            <p className="text-white text-xl mt-2 font-light">
                                Transaction History
                            </p>
                            <p className="font-light text-sm text-red-600 underline mt-2">
                                {" "}
                            </p>
                        </div>

                        <div className="transaction_info mt-6">
                            <div className="info">
                                <div className="info_left">
                                    <div className="left_img">
                                        <img src={addAmt} alt="" />
                                    </div>
                                    <span className="font-light">
                                        Add Amount
                                    </span>
                                </div>

                                <div className="info_right">
                                    <div className="amount font-light text-end">
                                        ₹4000
                                    </div>
                                    <div
                                        className="date font-light mt-3"
                                        style={{ fontSize: "11px" }}
                                    >
                                        23-July-2023 10:00 AM
                                    </div>
                                </div>
                            </div>
                            <div className="info">
                                <div className="info_left">
                                    <div className="left_img">
                                        <img src={deductAmt} alt="" />
                                    </div>
                                    <span>Add Amount</span>
                                </div>

                                <div className="info_right">
                                    <div className="amount font-light text-end">
                                        ₹4000
                                    </div>
                                    <div
                                        className="date font-light mt-3"
                                        style={{ fontSize: "11px" }}
                                    >
                                        23-July-2023 10:00 AM
                                    </div>
                                </div>
                            </div>
                            <div className="info">
                                <div className="info_left">
                                    <div className="left_img">
                                        <img src={addAmt} alt="" />
                                    </div>
                                    <span className="font-light">
                                        Add Amount
                                    </span>
                                </div>

                                <div className="info_right">
                                    <div className="amount font-light text-end">
                                        ₹4000
                                    </div>
                                    <div
                                        className="date font-light mt-3"
                                        style={{ fontSize: "11px" }}
                                    >
                                        23-July-2023 10:00 AM
                                    </div>
                                </div>
                            </div>
                            <div className="info">
                                <div className="info_left">
                                    <div className="left_img">
                                        <img src={deductAmt} alt="" />
                                    </div>
                                    <span>Add Amount</span>
                                </div>

                                <div className="info_right">
                                    <div className="amount font-light text-end">
                                        ₹4000
                                    </div>
                                    <div
                                        className="date font-light mt-3"
                                        style={{ fontSize: "11px" }}
                                    >
                                        23-July-2023 10:00 AM
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <PaginatedItems itemsPerPage={itemsPerPage} setitemsPerPage={setitemsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} setTotalPages={setTotalPages}  />
                </div>
            </div>
        </div>
    );
};

export default Wallet;

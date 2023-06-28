import React, { useState } from "react";
import "./Orders.scss";
import Navbar from "../Navbar/Navbar";
import balance from "../../assets/imgs/balance.svg";
import addAmt from "../../assets/imgs/addAmt.svg"
import PaginatedItems from "../Pagination/Pagination";

const Orders = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(4);
    const [itemsPerPage, setitemsPerPage] = useState(10);

    return (
        <div>
            <Navbar />

            <div className="orders_wrapper profile_wrapper flex items-center justify-center flex-col">
                <div className="orders_container profile_container">
                    <p className="text-4xl text-red-600 font-bold  text-center">
                        Order History
                    </p>

                    

                    <div className="transactions p-3">

                        <div className="transaction_info ">
                            <div className="info">
                                <div className="info_left">
                                    <div className="left_img">
                                        <img src={addAmt} alt="" />
                                    </div>
                                    <span className="font-light">Add Amount</span>
                                </div>

                                <div className="info_right">
                                    <div className="amount text-end">₹4000</div>
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
                                    <span className="font-light">Add Amount</span>
                                </div>

                                <div className="info_right">
                                    <div className="amount text-end">₹4000</div>
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
                                    <span className="font-light">Add Amount</span>
                                </div>

                                <div className="info_right">
                                    <div className="amount text-end">₹4000</div>
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
                                    <span className="font-light">Add Amount</span>
                                </div>

                                <div className="info_right">
                                    <div className="amount text-end">₹4000</div>
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

export default Orders;

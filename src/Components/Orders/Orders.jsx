import React, { useEffect, useState } from "react";
import "./Orders.scss";
import Navbar from "../Navbar/Navbar";
import balance from "../../assets/imgs/balance.svg";
import addAmt from "../../assets/imgs/addAmt.svg";
import PaginatedItems from "../Pagination/Pagination";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(4);
  const [itemsPerPage, setitemsPerPage] = useState(10);
  const userId = localStorage.getItem("userId");
  const [orders, setOrders] = useState([]);
  const fetchData = () => {
    axios({
      url: `http://localhost:8080/v1/order/history/${userId}?page=${currentPage}&limit=${itemsPerPage}`,
      method: "get",
    })
      .then((response) => {
        setOrders(response.data.result);
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      });
  };

    useEffect(() => {
        fetchData();
    }, [currentPage]);

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
                            {orders.map((item) => {
                                return (
                                    <div className="info">
                                        <div className="info_left">
                                            <div className="left_img">
                                                <img src={addAmt} alt="" />
                                            </div>
                                            <span className="font-light">
                                                Product Purchased
                                            </span>
                                        </div>
                                        <div className="info_right">
                                            <div className="amount text-end">
                                                ₹ {item.amount}
                                            </div>
                                            <div
                                                className="date font-light mt-3"
                                                style={{ fontSize: "11px" }}
                                            >
                                                {moment(item.createdAt).format(
                                                    "DD-MM-YYYY h:mm A"
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                            {orders.length == 0 ? (
                                <p className="text-white">
                                    No Orders Yet!{" "}
                                    <p className="text-[red]">
                                        <Link to={"/"}>Play Now</Link>
                                    </p>
                                </p>
                            ) : (
                                ""
                            )}
                            {/* <div className="info">
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
              </div> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5 text-center">
                <PaginatedItems
                    itemsPerPage={itemsPerPage}
                    setitemsPerPage={setitemsPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalPages={totalPages}
                    setTotalPages={setTotalPages}
                />
            </div>
        </div>
    );
};

export default Orders;

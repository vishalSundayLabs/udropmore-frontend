import React, { useState, useEffect } from "react";
import useInputChange from "../../hooks/useInputChange";
import InputField from "../InputField/InputField";
import "./Wallet.scss";
import Navbar from "../Navbar/Navbar";
import { FlipDate } from "../flipTimer/FlipDate";
import { FlipMoney } from "../flipTimer/Flip";
import balance from "../../assets/imgs/balance.svg";
import addAmt from "../../assets/imgs/addAmt.svg";
import deductAmt from "../../assets/imgs/deductAmt.svg";
import PaginatedItems from "../Pagination/Pagination";
import axios from "axios";
import moment from "moment";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Wallet = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(4);
  const userId = localStorage.getItem("userId");
  const [itemsPerPage, setitemsPerPage] = useState(10);
  const [walletData, setWalletData] = useState([]);
  const [balance, setBalance] = useState({});
  const fetchData = () => {
    axios({
      url: `http://localhost:8080/v1/transaction/list/user/${userId}?page=${currentPage}&limit=${itemsPerPage}`,
      method: "get",
    })
      .then((response) => {
        setWalletData(response.data.result);
        setTotalPages(Math.ceil(response.data.result.length / itemsPerPage));
      })
      .catch((error) => {
        toast.error(`${error.message}`, {
          position: toast.POSITION.TOP_RIGHT,
          theme: "dark",
        });
        console.log(error);
      });

    axios({
      url: `http://localhost:8080/v1/users/wallet/balance/${userId}`,
      method: "get",
    })
      .then((response) => {
        setBalance(response.data.result);
      })
      .catch((error) => {
        toast.error(`${error.message}`, {
          position: toast.POSITION.TOP_RIGHT,
          theme: "dark",
        });
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      <div className="wallet_wrapper profile_wrapper flex items-center justify-center flex-col">
        <div className="wallet_container profile_container">
          <p className="wallet_head text-4xl text-red-600 font-bold mt-5 text-center">
            My Wallet
          </p>

          <div className="flex justify-center items-center mt-5 flex-col">
            <p className="current_bal text-red-600">CURRENT BALANCE</p>

            <div className="mt-6">
              <p
                style={{
                  color: "white",
                  letterSpacing: "2px",
                  fontSize: "35px",
                }}
              >
                ₹{balance.walletBalance}
              </p>
            </div>

            <div className="add_money mt-6">
              <button onClick={() => navigate("/addmoney")} type="submit">
                Add Money
              </button>
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
              {walletData.map((trn) => {
                return (
                  <div className="info">
                    <div className="info_left">
                      <div className="left_img">
                        <img
                          src={trn.type == "CREDIT" ? addAmt : deductAmt}
                          alt=""
                        />
                      </div>
                      <span className="font-light">
                        {trn.category.split("_").join(" ")}
                      </span>
                    </div>

                    <div className="info_right">
                      <div className="amount font-light text-end">
                        {trn.type == "CREDIT"
                          ? `+₹ ${trn.amount}`
                          : `-₹${trn.amount}`}
                      </div>
                      <div
                        className="date font-light mt-3"
                        style={{ fontSize: "11px" }}
                      >
                        {moment(trn.createdAt).format("DD-MM-YYYY h:mm A")}
                      </div>
                    </div>
                  </div>
                );
              })}
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
      {/* <Footer /> */}
    </div>
  );
};

export default Wallet;

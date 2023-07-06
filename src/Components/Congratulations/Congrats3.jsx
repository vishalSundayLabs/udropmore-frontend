import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Congrats3.scss";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Congrats3 = () => {
  const location = useLocation();
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const [rank, setRank] = useState([]);
  const [bidder,setBidder] = useState([])
  const [product, setProduct] = useState({});
  const auctionId = queryParams.get("auctionid");
  const productId = queryParams.get("productId");

  useEffect(() => {
    axios({
      url: `http://localhost:8080/v1/auction/details/${auctionId}`,
      method: "get",
    })
      .then((response) => {
        setRank(
          response.data.result.bidders.filter((item) => {
            if (item.userId == userId) {
              return item;
            }
          })
        );
        axios({
          url: `http://localhost:8080/v1/product/get/by/id/${productId}`,
          method: "get",
        })
          .then((res) => {
            if (res.data.result) {
              setProduct(res.data.result.product);
            }
          })
          .catch((error) => {
            toast.error(`${error.message}`, { position: toast.POSITION.TOP_RIGHT,theme: "dark", });
            console.log(error);
          });
      })
      .catch((error) => {
        toast.error(`${error.message}`, { position: toast.POSITION.TOP_RIGHT,theme: "dark", });
        console.log(error);
      });
  }, []);

  const redirect = () => {
    navigate(`/congratulations?auctionid=${auctionId}&productId=${productId}`);
  };

  console.log("line 55",rank)
  return (
    <>
      <Navbar />
      <div className="cong3_wrapper mt-16">
        <div className="cong3_container">
          <div className="cong3_main">
            <div className="left">
              <img src="/img/cong3.svg" alt="" />
            </div>

            <div className="right">
              <div className="text-center">
                <p
                  className="font-bold text-white"
                  style={{ fontSize: "32px" }}
                >
                  Rank #{rank.length ? rank[rank.length - 1]?.rank : ""}
                </p>
                <p
                  className="font-bold text-red-600"
                  style={{ fontSize: "42px" }}
                >
                  Congratulations!
                </p>
                <p
                  className="text-lg font-medium"
                  style={{ color: "#FFFFFFCC" }}
                >
                  You have won <span className="font-semibold">{product?.name}</span>
                </p>
              </div>

              <div className="money_section">
                <div className="money_left">
                  <p className="text-white font-medium text-2xl mb-3">
                    You Saved
                  </p>
                  <p className="fs-32 font-bold text-white">₹{ product?.marketPrice - rank[rank.length - 1]?.biddingAmount}</p>
                </div>
                <div className="money_center"></div>
                <div className="money_right">
                  <p className="text-white font-medium text-2xl mb-3">
                    You Only Pay
                  </p>
                  <p className="fs-32 font-bold text-white">₹{rank.length ? rank[rank.length - 1]?.biddingAmount:0}</p>
                </div>
              </div>
              <div className="pay_btn mt-12">
                <div className="add_money profile_submit mt-6">
                  <button type="submit">Pay Now</button>
                  <p className="text-white mt-2">Pay Later</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Congrats3;

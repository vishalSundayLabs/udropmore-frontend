import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FlipDate } from "../flipTimer/FlipDate";
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";
import Navbar from "../Navbar/Navbar";
import Timer from "../Timer/Timer";
import ProductHeader from "./ProductHeader";

const Product3 = () => {
  const [product, setProduct] = useState({});
  const [auction, setAuction] = useState({});
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const auctionId = queryParams.get("auctionid");
  const userId = localStorage.getItem("userId");
  const [isShow, setIsShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modelMessage,setModelMessage] = useState("")
  const navigate = useNavigate();

  const openModal = () => {
    console.log("opening");
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const fetchData = async () => {
    await axios
      .get(
        `http://localhost:8080/v1/product/get/by/id/${queryParams.get(
          "productId"
        )}`
      )
      .then(async (response) => {
        setProduct(response.data.result.product);
        await setAuction(
          response.data.result.auction.filter(
            (item) => item._id == auctionId
          )[0]
        );
        setIsShow(true);
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      });
  };

  const handleParticipate = (auctionId, userId) => {
    console.log("participating....");
    openModal();
    axios({
      method: "put",
      url: `http://localhost:8080/v1/auction/participate/${auctionId}/${userId}`,
    })
      .then((response) => {
        if (response.data.result) {
          alert(response.data.message);
          navigate(
            `/product4?productId=${response.data.result.productId}&auctionid=${response.data.result._id}`
          );
        } else {
          // openModal();
         setModelMessage(response.data.message)
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);
  console.log("line 65", auction);
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 gap-6">
          <div className="flex justify-center text-3xl rounded-xl my-32 md:mt32">
            <img src="/img/product.png" className="product_img" />
          </div>
          <div className="flex justify-center text-3xl my-32 md:mb-32">
            <div
              className="flex flex-col align-h items-center h-96 w-full h-96  bg-cover bg-center"
              style={{ color: "black" }}
            >
              <div className="flex flex-col w-96 mb-9 justify-center">
                <p className="timer-title mb-2 text-center">
                  {auction.status == "ACTIVE" ? "Remaining Time" : "Starts In"}
                </p>
                <h1 className="text-5xl w-96 sm:w-64 md:w-64">
                  {isShow ? (
                    auction.status == "ACTIVE" ? (
                      <FlipDate
                        value={auction.endTime}
                        width={35}
                        height={50}
                        fontSize={35}
                      />
                    ) : (
                      <FlipDate
                        value={auction.startTime}
                        width={35}
                        height={50}
                        fontSize={35}
                      />
                    )
                  ) : (
                    ""
                  )}
                </h1>
              </div>
              <div className="flex w-full justify-around mb-4  align-h">
                <div className="price-box h-24   ">
                  <p>Market Price</p>
                  <p>₹{product.marketPrice}</p>
                </div>
                <div className="price-box h-24  test-base">
                  <p>Drop Starts</p>
                  <p>₹{auction.dropStartPrice}</p>
                </div>
                <div className="price-box h-24  test-base ">
                  <p>Entry Fee</p>
                  <p>₹{auction.entryFees}</p>
                </div>
              </div>
              <div
                className="flex flex-col align-h items-center h-screen w-full h-screer bg-cover bg-center"
                style={{ color: "black" }}
              >
                <div className="flex play-station">
                  <h1>{product.name}</h1>
                </div>

                <div className="product_points">
                  <div className="points_container">
                    <div className="flex mb-6 gap-7">
                      <div className="point flex gap-2">
                        <img src="/img/productPoint.svg" alt="" />
                        <p className="text-white">Dual Shock Sensor</p>
                      </div>
                      <div className="point flex gap-2">
                        <img src="/img/productPoint.svg" alt="" />
                        <p className="text-white">3D audio</p>
                      </div>
                    </div>
                    <div className="flex gap-7 mb-8">
                      <div className="point flex gap-2">
                        <img src="/img/productPoint.svg" alt="" />
                        <p className="text-white">VR Set Compatible</p>
                      </div>
                      <div className="point flex gap-2">
                        <img src="/img/productPoint.svg" alt="" />
                        <p className="text-white">Precision Tracking</p>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  className="shop-now rounded-lg px-4 py-2 my-5 text-white cursor-pointer"
                  // type="button"
                  style={{
                    width: "300px",
                    fontWeight: "700",
                    fontSize: "20px",
                  }}
                  onClick={()=>setShowModal(true)}
                >
                  Participate
                </button>
              </div>
              {showModal && (
                <Modal
                  closeModal={closeModal}
                  addParticipate={handleParticipate}
                  auctionid={auction._id}
                  userId={userId}
                  message={modelMessage}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product3;

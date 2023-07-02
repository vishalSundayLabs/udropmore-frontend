import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Timer from "../Timer/Timer";
import ProductHeader from "./ProductHeader";
import "./Product.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { FlipDate } from "../flipTimer/FlipDate";

const Product = () => {
  const [product, setProduct] = useState({});
  const [auction, setAuction] = useState({});
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const auctionId = queryParams.get("auctionid");
  const navigate = useNavigate();
  const fetchData = async () => {
    await axios
      .get(
        `https://dropmore-api.onrender.com/v1/product/get/by/id/${queryParams.get(
          "productId"
        )}`
      )
      .then((response) => {
        setProduct(response.data.result.product);
        setAuction(
          response.data.result.auction.filter((item) => item._id == auctionId)[0]
        );
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
    return () => {};
  }, []);
  console.log("line 39", auction);
  return (
    <>
      <ProductHeader />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 gap-6">
          <div className="flex justify-center text-3xl rounded-xl my-32 md:mt32 product_img_container ">
            <img src="/img/product.png" />
          </div>
          <div className="flex justify-center text-3xl my-32 md:mb-32">
            <div
              className="flex flex-col align-h items-center h-96 w-full h-96  bg-cover bg-center"
              style={{ color: "black" }}
            >
              <div className="flex w-96 ">
                <h1 className="text-2xl">
                  {/* <FlipDate value={auction.startTime} /> */}
                </h1>
              </div>
              <div className="flex mb-4 gap-2 align-h">
                <div className="price-box w-20  h-24 lg:w-40 md:w-40 sm:w-25  ">
                  <p>Market Price</p>
                  <p>₹ {product.marketPrice}</p>
                </div>Drop Starts
                <div className="price-box w-40  h-24 lg:w-40 test-base md:w-40 sm:w-25">
                  <p>Drop Starts</p>
                  <p>₹ {auction.dropStartPrice}</p>
                </div>
                <div className="price-box w-40 h-24  lg:w-40 test-base md:w-40 sm:w-25">
                  <p>Entry Fee</p>
                  <p>₹ {auction.entryFees}</p>
                </div>
              </div>
              <div
                className="flex flex-col align-h items-center h-screen w-full h-screer bg-cover bg-center"
                style={{ color: "black" }}
              >
                <div className="flex play-station">
                  <h1>{product.name}</h1>
                </div>

                <div className="flex mb-4 gap-6">
                  <div className="properties-element flex flex-row gap-4 w-2/4  h-24 lg:w-64 md:w-64 sm:w-64">
                    <span>
                      <svg
                        width="40.55"
                        height="28.24"
                        viewBox="0 0 25 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.1983 6.33217H12.704H9.81062C9.01247 6.33217 8.6134 5.9295 8.51361 5.42618C8.39457 4.82575 8.2143 3.81554 8.01473 2.70822C7.85016 1.79511 8.32377 1.65465 9.01246 1.50024C9.91041 1.29891 11.7063 1.19824 12.704 1.19824C13.7453 1.19824 15.1202 1.25904 16.196 1.50024C17.0939 1.70157 17.0455 2.14399 16.9942 2.50689C16.8944 3.21111 16.7549 4.05608 16.5954 5.02171L16.5951 5.02352C16.4354 5.98991 15.7969 6.33217 15.1983 6.33217Z"
                          stroke="white"
                          stroke-width="0.7"
                        />
                        <path
                          d="M3.03462 16.0754L3.875 16.189C4.38839 16.189 4.51985 15.7971 4.90179 14.9568C5.41518 13.8274 5.95276 12.2438 6.15401 11.9401C6.44196 11.5056 6.95536 10.747 8.36777 11.0291H16.6191C17.7366 10.747 18.558 11.2994 18.9688 12.2872C19.4548 13.4563 19.5848 14.0327 19.9955 15.0595C20.2244 15.6315 20.4063 16.2917 21.2277 16.189L21.9522 16.0659M21.5629 2.32315C22.0995 3.33547 23.2936 6.1497 23.7766 9.30812C24.3804 13.2562 23.676 15.4832 22.6697 15.9894C21.9803 16.3362 21.8647 15.9894 21.7641 15.7869C21.3616 14.7746 19.4739 9.74711 18.4435 8.29581C17.9403 7.58719 17.5803 7.22497 17.236 6.87857C17.0012 6.64236 16.5718 5.90675 16.7328 4.85394C16.8938 3.80113 17.0683 2.86306 17.1353 2.52562C17.1689 2.25567 17.1555 1.69552 16.8335 1.61453C17.8397 1.58079 20.1944 1.67527 21.5629 2.32315ZM3.43714 2.32315C2.90047 3.33547 1.70638 6.1497 1.22338 9.30812C0.619624 13.2562 1.32399 15.4832 2.33026 15.9894C3.0197 16.3362 3.13526 15.9894 3.23589 15.7869C3.63839 14.7746 5.52608 9.74711 6.55653 8.29581C7.05965 7.58719 7.4197 7.22497 7.76403 6.87857C7.99883 6.64236 8.42816 5.90675 8.26716 4.85394C8.10616 3.80113 7.93174 2.86306 7.86466 2.52562C7.83112 2.25567 7.84453 1.69552 8.16653 1.61453C7.16028 1.58079 4.80564 1.67527 3.43714 2.32315Z"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <circle
                          cx="19.6874"
                          cy="3.66219"
                          r="0.616071"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <circle
                          cx="19.6874"
                          cy="6.94801"
                          r="0.616071"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <circle
                          cx="18.0448"
                          cy="5.30474"
                          r="0.616071"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <circle
                          cx="16.299"
                          cy="8.6935"
                          r="1.54018"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <circle
                          cx="8.70082"
                          cy="8.6935"
                          r="1.54018"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.83022 8.69313C9.83022 9.31692 9.32454 9.82259 8.70075 9.82259C8.07697 9.82259 7.57129 9.31692 7.57129 8.69313C7.57129 8.06934 8.07697 7.56367 8.70075 7.56367C9.32454 7.56367 9.83022 8.06934 9.83022 8.69313Z"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <circle
                          cx="16.2991"
                          cy="8.69313"
                          r="1.12946"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18.192 1.09307C19.3995 0.771073 20.6406 1.36141 21.1102 1.69683V2.07057C20.0254 1.7112 18.7287 1.61879 18.192 1.61879V1.09307Z"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.73516 1.09307C5.52765 0.771073 4.2866 1.36141 3.81702 1.69683V2.07057C4.90176 1.7112 6.19849 1.61879 6.73516 1.61879V1.09307Z"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M23.7739 9.22687C23.2849 6.10178 22.076 3.31725 21.5327 2.31561C20.1472 1.67457 17.7634 1.58108 16.7447 1.61447C17.0707 1.6946 17.0843 2.24884 17.0503 2.51594C16.9824 2.84982 16.8058 3.778 16.6428 4.81969C16.4798 5.86139 16.9145 6.58924 17.1522 6.82296C17.5008 7.1657 17.8653 7.5241 18.3747 8.22524C19.4179 9.66123 21.3289 14.6357 21.7364 15.6373C21.8383 15.8376 21.9553 16.1808 22.6533 15.8376C23.672 15.3368 24.3851 13.1332 23.7739 9.22687Z"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M1.22614 9.22687C1.71513 6.10178 2.92401 3.31725 3.46732 2.31561C4.85278 1.67457 7.23658 1.58108 8.2553 1.61447C7.92931 1.6946 7.91572 2.24884 7.94968 2.51594C8.01759 2.84982 8.19417 3.778 8.35717 4.81969C8.52016 5.86139 8.08551 6.58924 7.84781 6.82296C7.49921 7.16571 7.13471 7.5241 6.62535 8.22524C5.58214 9.66123 3.67107 14.6357 3.26358 15.6373C3.16171 15.8376 3.04471 16.1808 2.34673 15.8376C1.328 15.3368 0.614913 13.1332 1.22614 9.22687Z"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <circle
                          cx="21.3302"
                          cy="5.30474"
                          r="0.616071"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.8838 9.82324H13.1159"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.69666 6.94686V6.82085C4.69666 6.66433 4.75623 6.51368 4.86328 6.39949C5.10667 6.13987 5.51878 6.13987 5.76217 6.39949C5.86922 6.51368 5.9288 6.66433 5.9288 6.82085V6.94686C5.9288 7.28711 5.65297 7.56294 5.31273 7.56294C4.97248 7.56294 4.69666 7.28711 4.69666 6.94686Z"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5.92859 4.07213L5.92859 4.19815C5.92859 4.35467 5.86901 4.50532 5.76196 4.61951C5.51857 4.87913 5.10646 4.87913 4.86307 4.61951C4.75602 4.50532 4.69645 4.35467 4.69645 4.19815L4.69645 4.07213C4.69645 3.73188 4.97227 3.45606 5.31252 3.45606C5.65276 3.45606 5.92859 3.73188 5.92859 4.07213Z"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M3.87513 4.89387L4.00115 4.89387C4.15767 4.89387 4.30832 4.95344 4.42251 5.06049C4.68213 5.30389 4.68213 5.71599 4.42251 5.95939C4.30832 6.06644 4.15767 6.12601 4.00115 6.12601L3.87513 6.12601C3.53488 6.12601 3.25906 5.85019 3.25906 5.50994C3.25906 5.16969 3.53488 4.89387 3.87513 4.89387Z"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.74999 6.12632L6.62397 6.12632C6.46745 6.12632 6.3168 6.06675 6.20262 5.9597C5.943 5.71631 5.943 5.3042 6.20262 5.06081C6.3168 4.95376 6.46745 4.89418 6.62397 4.89418L6.74999 4.89418C7.09024 4.89418 7.36606 5.17001 7.36606 5.51025C7.36606 5.8505 7.09024 6.12632 6.74999 6.12632Z"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18.0446 2.42953L17.8393 3.25096"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.95538 2.42953L7.16074 3.25096"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.6787 7.35862H13.3216"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.2681 6.94824H13.7324"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    <p>Dual Shock Sensor</p>
                  </div>
                  <div className="properties-element flex flex-row gap-4 w-2/4  h-24 lg:w-64 md:w-64 sm:w-64">
                    <span>
                      <svg
                        width="40.55"
                        height="28.24"
                        viewBox="0 0 22 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.03616 8.7259C5.26181 8.17279 5.44357 6.97562 6.17265 5.7128C6.90174 4.44999 7.99646 3.75768 8.80172 4.07978C9.90794 4.52226 10.2538 5.45338 10.3451 6.01802C10.4611 6.7347 10.274 7.39844 10.0186 7.84093C9.72918 8.34223 9.24421 8.7259 8.6911 8.94715C8.13799 9.16839 7.03823 9.44166 6.03616 8.7259Z"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.48819 8.63169C8.17073 8.44841 8.24102 7.73235 8.64518 7.03232C9.04934 6.3323 9.63432 5.91339 9.95178 6.09668"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <ellipse
                          cx="0.663734"
                          cy="1.10622"
                          rx="0.663734"
                          ry="1.10622"
                          transform="matrix(-0.866025 -0.5 -0.5 0.866025 10.3507 6.7334)"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M3.27053 13.4819L3.27053 7.72949C4.04489 8.17198 5.15111 8.35635 5.70422 8.39323V13.4819C5.70425 13.9243 5.48295 14.4775 4.48738 14.4775C3.50989 14.4775 3.27053 13.9243 3.27053 13.4819Z"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.58032 4.02761C8.39595 3.51138 7.63029 2.24341 5.92539 1.59392C3.60232 0.708944 2.27485 1.4833 1.61112 2.36828C0.947381 3.25326 0.615515 5.02322 1.72174 6.35068C2.82796 7.67815 3.76795 8.1673 5.7322 8.43516"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.91675 3.96908C7.54801 3.23159 6.30166 1.69026 4.26621 1.42476"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <rect
                          width="1.10622"
                          height="1.95311"
                          rx="0.553112"
                          transform="matrix(-0.53013 0.847916 0.847916 0.53013 2.26538 2.12025)"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <rect
                          width="1.10622"
                          height="3.01187"
                          rx="0.553112"
                          transform="matrix(-0.53013 0.847916 0.847916 0.53013 2.26538 2.12025)"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.964 12.2659C16.7383 11.7128 16.5566 10.5157 15.8275 9.25284C15.0984 7.99003 14.0037 7.29772 13.1984 7.61982C12.0922 8.0623 11.7464 8.99342 11.655 9.55806C11.5391 10.2747 11.7261 10.9385 11.9815 11.381C12.2709 11.8823 12.7559 12.2659 13.309 12.4872C13.8621 12.7084 14.9619 12.9817 15.964 12.2659Z"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.5117 12.1729C13.8291 11.9896 13.7589 11.2736 13.3547 10.5736C12.9505 9.87353 12.3656 9.45463 12.0481 9.63791"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <ellipse
                          cx="12.7776"
                          cy="10.9008"
                          rx="0.663734"
                          ry="1.10622"
                          transform="rotate(-30 12.7776 10.9008)"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18.7293 17.0231L18.7293 11.2707C17.955 11.7132 16.8488 11.8976 16.2957 11.9345V17.0231C16.2956 17.4656 16.5169 18.0187 17.5125 18.0187C18.49 18.0187 18.7293 17.4656 18.7293 17.0231Z"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.4196 7.56809C13.6039 7.05185 14.3696 5.78388 16.0745 5.1344C18.3976 4.24942 19.725 5.02377 20.3888 5.90875C21.0525 6.79373 21.3844 8.56369 20.2781 9.89116C19.1719 11.2186 18.0533 11.8285 16.3569 11.9178"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.0831 7.50955C14.4519 6.77207 15.6982 5.23073 17.7337 4.96524"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <rect
                          x="19.7346"
                          y="5.66037"
                          width="1.10622"
                          height="1.95311"
                          rx="0.553112"
                          transform="rotate(57.9858 19.7346 5.66037)"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <rect
                          x="19.7346"
                          y="5.66037"
                          width="1.10622"
                          height="3.01187"
                          rx="0.553112"
                          transform="rotate(57.9858 19.7346 5.66037)"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    <p>3D audio</p>
                  </div>
                </div>

                <div className="flex mb-4 gap-6">
                  <div className="properties-element flex flex-row gap-4 w-2/4  h-24 lg:w-64 md:w-64 sm:w-64">
                    <span>
                      <svg
                        width="40.55"
                        height="28.24"
                        viewBox="0 0 25 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.23199 8.36632C2.23199 6.32262 3.60817 4.53976 5.62712 4.22268C7.4454 3.93711 9.85387 3.66986 12.4999 3.66986C15.1458 3.66986 17.5543 3.93711 19.3726 4.22268C21.3915 4.53976 22.7677 6.32262 22.7677 8.36632V11.0191C22.7677 13.0568 21.572 14.8658 19.5671 15.2299C17.9279 15.5276 15.6094 15.7859 12.4999 15.7859C9.3903 15.7859 7.07186 15.5276 5.43263 15.2299C3.42771 14.8658 2.23199 13.0568 2.23199 11.0191V8.36632Z"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M19.0977 4.63296C17.3522 4.34739 15.0401 4.08015 12.4999 4.08015C9.95977 4.08015 7.64764 4.3474 5.9021 4.63296"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M2.64307 10.4033C2.64307 12.441 3.79095 14.25 5.71567 14.6141C7.28933 14.9118 9.51504 15.1701 12.5002 15.1701C15.4854 15.1701 17.7111 14.9118 19.2848 14.6141C21.2095 14.25 22.3574 12.441 22.3574 10.4033"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <rect
                          x="7.16064"
                          y="7.57133"
                          width="10.6786"
                          height="3.28572"
                          rx="1.64286"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.77686 9.21429C7.77686 8.64721 8.23656 8.1875 8.80364 8.1875H9.41971C9.98679 8.1875 10.4465 8.64721 10.4465 9.21429V9.21429C10.4465 9.78137 9.98679 10.2411 9.41971 10.2411H8.80364C8.23656 10.2411 7.77686 9.78137 7.77686 9.21429V9.21429Z"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <rect
                          x="7.77686"
                          y="8.1875"
                          width="2.05357"
                          height="2.05357"
                          rx="1.02679"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.3603 14.7745C11.4271 15.0085 11.641 15.1699 11.8843 15.1699H13.1157C13.359 15.1699 13.5729 15.0085 13.6397 14.7745V14.7745C13.789 14.2523 13.3968 13.7324 12.8536 13.7324H12.1464C11.6032 13.7324 11.211 14.2523 11.3603 14.7745V14.7745Z"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.3597 4.30718C11.4293 4.16804 11.5715 4.08015 11.727 4.08015H13.273C13.4285 4.08015 13.5707 4.16804 13.6403 4.30718V4.30718C13.7768 4.58027 13.5783 4.90158 13.273 4.90158H11.727C11.4217 4.90158 11.2232 4.58027 11.3597 4.30718V4.30718Z"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.5537 9.21429C14.5537 8.64721 15.0134 8.1875 15.5805 8.1875H16.1966C16.7636 8.1875 17.2234 8.64721 17.2234 9.21429V9.21429C17.2234 9.78137 16.7636 10.2411 16.1966 10.2411H15.5805C15.0134 10.2411 14.5537 9.78137 14.5537 9.21429V9.21429Z"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <rect
                          x="15.1695"
                          y="8.1875"
                          width="2.05357"
                          height="2.05357"
                          rx="1.02679"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <circle
                          cx="8.80372"
                          cy="9.2144"
                          r="0.410714"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <circle
                          cx="16.1964"
                          cy="9.2144"
                          r="0.410714"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5.10699 4.28572C5.14146 3.61571 5.74668 2.33295 7.48391 1.74053C9.22114 1.14811 11.5857 1 12.5508 1C13.516 1 15.8805 1.14811 17.6178 1.74053C19.355 2.33295 19.8582 3.51303 19.8927 4.18304"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.4999 3.05389C13.1061 3.05389 13.4097 2.3209 12.981 1.89222C12.7153 1.62647 12.2844 1.62647 12.0187 1.89222C11.59 2.3209 11.8936 3.05389 12.4999 3.05389Z"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.5535 14.1427V11.6784C16.2306 11.6441 19.9749 11.7194 21.5356 12.2944"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.4465 14.1427V11.6784C8.76942 11.6441 5.02507 11.7194 3.46436 12.2944"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.4465 4.69632V6.7499C8.90632 6.7499 5.41525 6.7499 3.46436 7.57132"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.5535 4.69632V6.7499C16.0937 6.7499 19.5848 6.7499 21.5356 7.57132"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M23.9263 11.2432C23.6905 9.74258 23.761 8.54346 23.8023 7.98248C23.7313 7.91403 23.5482 7.81819 23.3839 7.98248C23.3129 8.70123 23.3198 10.4917 23.4866 11.5762C23.692 12.9111 23.2812 14.5539 22.4598 16.1968C22.3914 16.3337 22.3982 16.6075 22.5625 16.6075C23.3064 15.766 24.2762 13.4698 23.9263 11.2432Z"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M22.6327 12.295C23.1178 12.5973 23.3144 13.241 23.08 14.3056C22.8457 15.3701 22.4752 16.1792 22.1035 16.5574C21.8018 16.8645 21.1872 17.232 20.3458 16.8645C19.4083 16.455 19.4298 15.6247 19.5275 15.3176"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M1.07368 11.2432C1.30948 9.74258 1.23899 8.54346 1.19766 7.98248C1.26868 7.91403 1.45179 7.81819 1.61607 7.98248C1.68709 8.70123 1.68025 10.4917 1.51339 11.5762C1.30804 12.9111 1.71875 14.5539 2.54018 16.1968C2.60863 16.3337 2.60179 16.6075 2.4375 16.6075C1.6936 15.766 0.723772 13.4698 1.07368 11.2432Z"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M2.36739 12.295C1.88223 12.5973 1.68565 13.241 1.92002 14.3056C2.15438 15.3701 2.52489 16.1792 2.89654 16.5574C3.19827 16.8645 3.81288 17.232 4.65428 16.8645C5.59174 16.455 5.57021 15.6247 5.47256 15.3176"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M23.7945 13.9375C23.726 14.2113 23.5275 14.8616 23.2811 15.2723"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M1.20551 13.9375C1.27396 14.2113 1.47247 14.8616 1.7189 15.2723"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    <p>VR Set Compatible</p>
                  </div>
                  <div className="properties-element flex flex-row gap-4 w-2/4 h-24 lg:w-64 md:w-64 sm:w-64">
                    <span>
                      <svg
                        width="40.55"
                        height="28.24"
                        viewBox="0 0 12 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.47874 1.42825L1.65848 3.22655C1.2634 3.37394 1.00315 3.7533 1.00874 4.17494C1.03972 6.51227 1.08835 8.95614 1.08833 12.5664C1.08832 15.1125 1.04601 16.726 1.06902 18.27C1.07619 18.7514 1.43318 19.1528 1.91293 19.1929C3.69423 19.3415 6.55534 19.336 8.47999 19.3002C9.03361 19.2898 9.46795 18.828 9.44311 18.2749C9.18981 12.6333 8.34608 5.88696 7.80901 2.20876C7.71758 1.58259 7.07164 1.20706 6.47874 1.42825Z"
                          stroke="white"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.66553 10.0186V10.7259"
                          stroke="white"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.8041 2.06347C9.27485 1.6718 10.3772 1.38202 10.5539 1.35336C10.9882 1.28289 11.0202 1.4966 11.0063 1.79376C10.6444 9.5449 10.8579 16.5392 11.0087 19.1523C10.6483 19.1735 10.2507 19.2 9.56679 19.1523M1.50879 19.2371C1.99659 19.2786 2.51018 19.3122 3.03557 19.3391"
                          stroke="white"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.35886 2.01934L7.79907 2.09428C7.79907 2.09428 8.04799 3.51605 8.57234 7.91815C9.11766 12.4963 9.42398 17.1167 9.48224 19.1124C9.83181 19.1828 10.3784 19.1417 10.6697 19.1124C10.5823 15.4146 10.3202 5.45298 10.3202 3.69214C10.3202 2.28346 9.6793 1.98999 9.35886 2.01934Z"
                          stroke="white"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M2.95264 19.9995L3.12228 19.1328C5.66538 19.1328 7.63271 19.3842 9.31268 19.3842L9.48233 19.9995H2.95264Z"
                          stroke="white"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    <p>Precision Tracking</p>
                  </div>
                </div>

                <button
                  onClick={() =>
                    navigate(
                      `/shop/now?product=${product._id}&auctionId=${auction._id}`
                    )
                  }
                  className="shop-now w-96 rounded-lg px-2 py-2 text-white cursor-pointer sm:w-64 md:w-64 sm:text-lg md:text-lg"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;

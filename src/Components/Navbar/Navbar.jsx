import React, { useState } from "react";
import navIcon from "../../assets/imgs/navIcon.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    const navigate = useNavigate()

    return (
        <div>
            <div className="header-text">
                <Link to={"/"}>
                    <img src="/img/Drop More Final Logo.svg" width={"93%"} />
                </Link>
                <div className="flex items-center ">
                    {isAuth && (
                        <p>
                            <Link to="/login">Login </Link> /{" "}
                            <Link to={"/signup"}>Sign up</Link>
                        </p>
                    )}
                    {!isAuth && (
                        <div>
                            <img
                                src={navIcon}
                                alt=""
                                className="inline cursor-pointer"
                                onClick={() => setOpenMenu(true)}
                            />
                            <div className="round-box">
                                <p>0</p>
                            </div>
                            <div className="outer-box" onClick={()=> navigate('/orders')}>
                                <svg
                                    width="17"
                                    style={{ display: "initial" }}
                                    height="17"
                                    viewBox="0 0 17 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M13.1293 12.3112H6.48135C6.0757 12.312 5.68107 12.1792 5.35843 11.9333C5.03578 11.6874 4.80307 11.3422 4.69625 10.9508L3.07735 5.08461C3.05245 4.99331 3.04894 4.8975 3.06709 4.80462C3.08524 4.71174 3.12456 4.6243 3.18199 4.54908C3.24183 4.47122 3.31943 4.40879 3.40831 4.36703C3.49719 4.32527 3.59477 4.30538 3.6929 4.30902H15.3884C15.4788 4.30887 15.5682 4.32865 15.6501 4.36695C15.732 4.40525 15.8045 4.46113 15.8624 4.53062C15.9195 4.60018 15.9607 4.68143 15.983 4.76864C16.0054 4.85585 16.0083 4.9469 15.9916 5.03537L14.9452 10.7969C14.8674 11.2219 14.6432 11.6061 14.3114 11.8828C13.9796 12.1595 13.5613 12.3111 13.1293 12.3112ZM4.51159 5.54012L5.89658 10.6246C5.93265 10.7589 6.01313 10.877 6.1249 10.9597C6.23668 11.0424 6.37316 11.0849 6.51213 11.0801H13.1601C13.3058 11.0825 13.4477 11.033 13.5604 10.9406C13.6732 10.8482 13.7494 10.7187 13.7756 10.5753L14.6497 5.54012H4.51159Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M3.69331 5.53997C3.55515 5.54508 3.4193 5.50353 3.30763 5.42201C3.19597 5.3405 3.115 5.22376 3.07776 5.09062L2.12365 1.68046C2.08642 1.54731 2.00545 1.43058 1.89378 1.34906C1.78212 1.26755 1.64626 1.226 1.5081 1.23111H0.615552C0.452298 1.23111 0.295729 1.16625 0.180291 1.05082C0.0648526 0.935377 0 0.778809 0 0.615554C0 0.452299 0.0648526 0.295731 0.180291 0.180293C0.295729 0.0648545 0.452298 1.84647e-06 0.615552 1.84647e-06H1.53272C1.93492 -0.000566733 2.32631 0.13019 2.64741 0.372398C2.9685 0.614606 3.20174 0.955021 3.31167 1.34191L4.30887 4.75822C4.33389 4.83905 4.34197 4.92418 4.33262 5.00827C4.32327 5.09237 4.29668 5.17364 4.25451 5.247C4.21234 5.32036 4.1555 5.38424 4.08754 5.43465C4.01958 5.48505 3.94195 5.52091 3.85951 5.53997C3.80448 5.54893 3.74835 5.54893 3.69331 5.53997Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M8.00259 16.0042C7.7591 16.0042 7.52108 15.932 7.31862 15.7967C7.11617 15.6614 6.95838 15.4692 6.8652 15.2442C6.77202 15.0193 6.74764 14.7717 6.79514 14.5329C6.84264 14.2941 6.95989 14.0747 7.13207 13.9026C7.30424 13.7304 7.5236 13.6132 7.76241 13.5656C8.00122 13.5181 8.24876 13.5425 8.47371 13.6357C8.69867 13.7289 8.89094 13.8867 9.02622 14.0891C9.16149 14.2916 9.23369 14.5296 9.23369 14.7731C9.23369 15.0996 9.10399 15.4127 8.87311 15.6436C8.64223 15.8745 8.3291 16.0042 8.00259 16.0042Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M11.6959 16.0042C11.4525 16.0042 11.2144 15.932 11.012 15.7967C10.8095 15.6614 10.6517 15.4692 10.5586 15.2442C10.4654 15.0193 10.441 14.7717 10.4885 14.5329C10.536 14.2941 10.6533 14.0747 10.8254 13.9026C10.9976 13.7304 11.217 13.6132 11.4558 13.5656C11.6946 13.5181 11.9421 13.5425 12.1671 13.6357C12.392 13.7289 12.5843 13.8867 12.7196 14.0891C12.8549 14.2916 12.9271 14.5296 12.9271 14.7731C12.9271 15.0996 12.7973 15.4127 12.5665 15.6436C12.3356 15.8745 12.0225 16.0042 11.6959 16.0042Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M11.6955 8.6177H8.00215C7.83889 8.6177 7.68233 8.55285 7.56689 8.43741C7.45145 8.32197 7.3866 8.1654 7.3866 8.00215C7.3866 7.83889 7.45145 7.68233 7.56689 7.56689C7.68233 7.45145 7.83889 7.3866 8.00215 7.3866H11.6955C11.8587 7.3866 12.0153 7.45145 12.1307 7.56689C12.2462 7.68233 12.311 7.83889 12.311 8.00215C12.311 8.1654 12.2462 8.32197 12.1307 8.43741C12.0153 8.55285 11.8587 8.6177 11.6955 8.6177Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className={`navmenu ${openMenu ? "open_nav" : "close_nav"}`}>
                <div className="head mt-10">
                    <p className="fs-42 text-red-600 font-bold text-center">
                        Menu
                    </p>
                    {/* <div className="closeBtn"> */}
                        <img
                            src="/img/closeNav.svg"
                            alt=""
                            className="ml-auto cursor-pointer"
                            onClick={()=>setOpenMenu(false)}
                        />
                    {/* </div> */}
                </div>
                <div className="menu_container">
                    <Link
                        to={"/login"}
                        className="flex items-center justify-center"
                    >
                        Login/Sign Up <img src="/img/navRight.svg" alt="" />{" "}
                    </Link>
                    <Link
                        to={"/wallet"}
                        className="flex items-center justify-center"
                    >
                        Wallet <img src="/img/navRight.svg" alt="" />
                    </Link>
                    <Link
                        to={"/orders"}
                        className="flex items-center justify-center"
                    >
                        Order History <img src="/img/navRight.svg" alt="" />
                    </Link>
                    <Link
                        to={"/profile"}
                        className="flex items-center justify-center"
                    >
                        Profile <img src="/img/navRight.svg" alt="" />
                    </Link>
                    <Link
                        to={"/about"}
                        className="flex items-center justify-center"
                    >
                        About Us <img src="/img/navRight.svg" alt="" />
                    </Link>
                    <Link
                        to={"/policies"}
                        className="flex items-center justify-center"
                    >
                        Privacy Policy <img src="/img/navRight.svg" alt="" />
                    </Link>
                    <Link
                        to={"/tnc"}
                        className="flex items-center justify-center"
                    >
                        Terms & Conditions{" "}
                        <img src="/img/navRight.svg" alt="" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

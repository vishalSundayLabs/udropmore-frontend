import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./Congratulations.css";
const Congratulations = () => {
  return (
    <>
      <div className="header">
        <div className="header-text">
          <img
            src="/img/Drop More Final Logo.svg"
            width={window?.innerWidth > 800 ? "20%" : "45%"}
          />
          <p>
            <Link to="/login">Login </Link> /{" "}
            <Link to={"/signup"}>Sign up</Link>
            <svg
              width="22"
              style={{ margin: "0 20px", display: "initial" }}
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.70762 22C4.12044 21.9733 3.52856 21.989 2.94844 21.9122C1.43071 21.7115 0.246161 20.6054 0.0909392 19.0753C-0.0297892 17.8845 -0.0305731 16.6617 0.0901552 15.4709C0.246945 13.9259 1.42444 12.7884 2.97666 12.6458C4.11182 12.5415 5.27285 12.5344 6.40723 12.6411C8.07469 12.7986 9.2467 14.027 9.36037 15.6998C9.4372 16.8286 9.42152 17.9747 9.32274 19.1019C9.19025 20.6133 7.82226 21.8416 6.29512 21.9302C5.76831 21.9608 5.23836 21.9349 4.70997 21.9349C4.70841 21.9576 4.70841 21.9788 4.70762 22ZM1.91598 17.2629C1.91676 17.2629 1.91754 17.2629 1.91911 17.2629C1.91911 17.7325 1.90108 18.2028 1.92303 18.6708C1.95909 19.4468 2.53686 20.0332 3.31925 20.0559C4.23804 20.0826 5.15839 20.0833 6.07718 20.0575C6.88779 20.0347 7.47575 19.4468 7.50005 18.6324C7.52749 17.723 7.52749 16.8122 7.49927 15.9028C7.47418 15.1056 6.88936 14.5106 6.09678 14.484C5.16859 14.4526 4.23725 14.4519 3.30906 14.4848C2.51491 14.5138 1.95674 15.1103 1.92068 15.913C1.89951 16.3622 1.91598 16.8129 1.91598 17.2629Z"
                fill="white"
              />
              <path
                d="M4.70918 0C5.30577 0.0290041 5.90863 0.0109745 6.49737 0.0956351C8.05743 0.321397 9.19181 1.44864 9.34155 3.04386C9.44503 4.14994 9.44738 5.2811 9.34625 6.38717C9.19495 8.04981 8.04097 9.21154 6.379 9.36519C5.25403 9.46945 4.10319 9.46082 2.97822 9.35578C1.41737 9.20998 0.224202 8.05138 0.0854432 6.50319C-0.0243099 5.28188 -0.0117667 4.03235 0.114449 2.81261C0.269671 1.30989 1.63923 0.14894 3.15147 0.0689827C3.66888 0.0415464 4.18864 0.0642794 4.70761 0.0642794C4.7084 0.0431142 4.7084 0.021949 4.70918 0ZM4.69742 1.93936C4.69742 1.94014 4.69742 1.94014 4.69742 1.94092C4.23803 1.94092 3.77707 1.92368 3.31845 1.94484C2.53686 1.98169 1.94654 2.5555 1.92459 3.33155C1.89794 4.25028 1.89794 5.17057 1.92224 6.08929C1.94341 6.89122 2.51334 7.48854 3.30905 7.51755C4.23724 7.55204 5.16858 7.55047 6.09677 7.51912C6.87837 7.49246 7.46712 6.90925 7.49534 6.12849C7.52905 5.20036 7.52905 4.26909 7.49613 3.34096C7.46869 2.54295 6.87445 1.98012 6.07639 1.94327C5.61778 1.92289 5.15682 1.93936 4.69742 1.93936Z"
                fill="white"
              />
              <path
                d="M21.9795 17.2664C21.9513 17.8629 21.9693 18.4657 21.8862 19.0545C21.6714 20.5697 20.5809 21.7315 19.0593 21.8867C17.8685 22.0082 16.6455 22.0113 15.4555 21.8898C13.8782 21.7291 12.7524 20.5313 12.609 18.9228C12.5117 17.8347 12.5102 16.7247 12.6066 15.6375C12.7571 13.9466 13.9558 12.7559 15.6436 12.6265C16.7811 12.5395 17.9375 12.5591 19.075 12.6587C20.5927 12.7919 21.8188 14.1528 21.909 15.6806C21.9403 16.2073 21.9137 16.7373 21.9137 17.2664C21.9364 17.2656 21.9576 17.2664 21.9795 17.2664ZM17.2531 20.0625C17.2531 20.0618 17.2531 20.061 17.2531 20.0602C17.7227 20.0602 18.193 20.079 18.661 20.0563C19.4223 20.0186 20.011 19.4409 20.0322 18.6782C20.0588 17.7501 20.0596 16.8196 20.0337 15.8914C20.0118 15.0997 19.4246 14.5079 18.6273 14.4828C17.7086 14.4538 16.7874 14.4538 15.8686 14.4836C15.087 14.5086 14.4912 15.0903 14.463 15.8671C14.4293 16.8055 14.4285 17.7461 14.4638 18.6845C14.4936 19.4636 15.0917 20.0233 15.8741 20.0594C16.3327 20.0798 16.7929 20.0625 17.2531 20.0625Z"
                fill="white"
              />
              <path
                d="M22.0003 4.71382C21.9477 5.41541 21.9564 6.12875 21.8286 6.81701C21.5973 8.05321 20.4567 9.28393 18.899 9.37721C17.8069 9.44306 16.7 9.47049 15.6126 9.37251C13.9405 9.22278 12.7638 8.05948 12.6132 6.39136C12.5121 5.26568 12.5207 4.11571 12.6258 2.99004C12.7708 1.43636 13.9405 0.239352 15.4872 0.105306C16.7086 -0.000519313 17.9574 0.0159425 19.178 0.137446C20.644 0.28325 21.8176 1.64566 21.9085 3.12487C21.9407 3.65165 21.914 4.18156 21.914 4.71069C21.943 4.71225 21.9713 4.71304 22.0003 4.71382ZM17.2629 1.94511C17.2629 1.94354 17.2629 1.94119 17.2629 1.93962C16.8035 1.93962 16.3425 1.92237 15.8839 1.94354C15.0741 1.98038 14.4822 2.55733 14.4587 3.36788C14.432 4.27719 14.432 5.18808 14.4594 6.0974C14.483 6.89226 15.067 7.49116 15.8596 7.5186C16.7878 7.55152 17.7191 7.5523 18.6473 7.51781C19.443 7.48881 20.0153 6.89305 20.0357 6.09112C20.06 5.1528 20.0584 4.21291 20.0294 3.27538C20.0075 2.56752 19.4101 1.98665 18.7006 1.94981C18.2224 1.92473 17.7418 1.94511 17.2629 1.94511Z"
                fill="white"
              />
            </svg>
            {/* <div className="round-box">
              <p>0</p>
            </div> */}
            <div className="outer-box">
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
          </p>{" "}
        </div>
        <div className="circle-left"></div>
        <div className="header-bg header-imgs">
          <img
            src={"/img/cong.svg"

            }
            width={"25%"}
            style={{ objectFit: "cover", height: "10px !important" }}
          />
          <img
            src={ "/img/Group (2).svg"
     
            }
            width={"22%"}
            className="header-imgs2"
            style={{ objectFit: "cover", height: "10px !important" }}
          />
           <img
            src={"/img/BACKGROUND.svg"
                
            }
            width={"22%"}
            className="header-imgs2"
            style={{ objectFit: "cover", height: "10px !important" }}
          />
        </div>
      </div>
    <div className="outer-box-ring">
    <div className="outer-text">
      <h1>Congratulations!</h1>
        <p>You have won this drop</p>
      </div>
      <div className="round-ring">
        <svg
          width="250"
          height="250"
          viewBox="0 0 146 146"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="73" cy="73" r="73" fill="#FF1E1E" fill-opacity="0.08" />
          <circle
            cx="72.9997"
            cy="72.9996"
            r="57.4267"
            fill="#FF1E1E"
            fill-opacity="0.1"
          />
          <circle
            cx="72.9997"
            cy="72.9996"
            r="57.3767"
            stroke="#FF1E1E"
            stroke-opacity="0.5"
            stroke-width="0.1"
          />
          <circle
            cx="72.7467"
            cy="72.7467"
            r="45.7467"
            fill="#FF1E1E"
            fill-opacity="0.15"
          />
          <circle
            cx="72.7467"
            cy="72.7467"
            r="45.5467"
            stroke="#FF1E1E"
            stroke-opacity="0.4"
            stroke-width="0.4"
          />
        </svg>
        <svg
          className="right-sign"
          width="50"
          height="50"
          viewBox="0 0 38 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 15.4655L13.0539 26L35 3"
            stroke="white"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="congratulations-text-box">
        <button className="shop-now">
        <strong>Go To Pay Now</strong>
      </button>
      </div>
    </div>
    <div className="footer-width"></div>
      <Footer />
    </>
  );
};

export default Congratulations;

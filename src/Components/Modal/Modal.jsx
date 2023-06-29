import React from "react";
import "./Modal.scss";

const Modal = (props) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      props.closeModal();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <img
          src="/img/close.svg"
          alt=""
          className="ml-auto modal-close-btn text-base"
          onClick={props.closeModal}
        />
        <p className="head">Participate Now</p>

        <div className="modal_data " style={{ color: "#FFFFFF99" }}>
          <div>
            <p>Participation Fee</p>
            <p>₹ 99</p>
          </div>
          <div>
            <p>Security Deposit</p>
            <p className="flex items-center gap-1 ml-1">
              ₹ 199 <span className="text-white text-xs">{"(Refundable)"}</span>
            </p>
          </div>
          <div>
            <p>Current Balance</p>
            <p className="text-red-600 ml-1">₹ 1850 </p>
          </div>
        </div>

        <div className="add_money">
          <button
            onClick={() => {
              props.closeModal();
              props.addParticipate(props.auctionid, props.userId);
            }}
          >
            Join Now
          </button>
          <p className="text-red-600 ml-1 text-center">
            {props.message ? `* You have already participated in this auction *` : ""}
          </p>
        </div> 
      </div>
    </div>
  );
};

export default Modal;

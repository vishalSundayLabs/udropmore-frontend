import React, { useState } from "react";
import "./AddMoney.scss";
import Navbar from "../Navbar/Navbar";
import balance from "../../assets/imgs/balance.svg";
import addAmt from "../../assets/imgs/addAmt.svg";
import Footer from "../Footer/Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddMoney = () => {
  const userId = localStorage.getItem("userId");
  const [balance, setBalance] = useState(0);
  const navigate = useNavigate()
  const [selected,setSelected] = useState({
    inputOne:false,
    inputTwo:false,
    inputThree:false,
    inputFour:false
  })
  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setBalance(value)
  };
  
  const hanldeOnClickChangeClass = (e)=>{
    e.preventDefault()
    const {name,value} = e.target
    if(name=="inputOne"){
        setSelected({inputTwo:false,inputThree:false,inputFour:false,[name]:!selected[name]})
    }
    if(name=="inputTwo"){
        setSelected({inputOne:false,inputThree:false,inputFour:false,[name]:!selected[name]})
    }
    if(name=="inputThree"){
        setSelected({inputTwo:false,inputOne:false,inputFour:false,[name]:!selected[name]})
    }
    if(name=="inputFour"){
        setSelected({inputTwo:false,inputThree:false,inputOne:false,[name]:!selected[name]})
    }
    if(!selected[name]){
        setBalance(value)
    }else{
        setBalance(0)
    }
  }
console.log("line 39",selected,balance)
  const handleAddMoney = () => {
    axios({
      method: "put",
      url: `http://localhost:8080/v1/users/add/money/${userId}`,
      data: { walletBalance: balance },
    })
      .then((res) => {
        toast.success(res.data.message, {
          position: toast.POSITION.TOP_RIGHT,
          theme: "dark",
        });
        navigate("/wallet")
      })
      .catch((error) => {
        toast.error(`${error.message}`, {
          position: toast.POSITION.TOP_RIGHT,
          theme: "dark",
        });
      });
  };

  return (
    <div>
      <Navbar />

      <div className="addmoney_wrapper profile_wrapper flex items-center justify-center mt-16">
        <div className="addmoney_container profile_container">
          <p className="text-5xl text-red-600 font-bold mt-5 text-center">
            Add Money
          </p>

          <div className="amount_container flex justify-center mt-6">
            <div className="amount ">
              <input type="text" name="addmoney" value={balance} placeholder={"Add Money"} className="text-white text-center text-2xl text-bold"/>
            </div>
          </div>
          <div className="amount_btn text-white">
            <button  className={selected.inputOne ? "selected_amt" : ""} onClick={hanldeOnClickChangeClass} name="inputOne" value={1000}>₹1,000</button>
            <button  className={selected.inputTwo ? "selected_amt" : ""} onClick={hanldeOnClickChangeClass} name="inputTwo" value={2000}>₹2,000</button>
            <button  className={selected.inputThree ? "selected_amt" : ""} onClick={hanldeOnClickChangeClass} name="inputThree" value={5000}>₹5,000</button>
            <button  className={selected.inputFour ? "selected_amt" : ""} onClick={hanldeOnClickChangeClass} name="inputFour" value={10000}>₹10,000</button>
          </div>

          <div className="add_money" style={{ marginTop: "35px" }}>
            <button onClick={handleAddMoney}>Add</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AddMoney;

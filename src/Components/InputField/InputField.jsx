import React from "react";
import "./Input.scss";

const InputField = ({ label, type, value, onChange, placeholder,name }) => {
    return (
        <div className="input_container">
            <div>
                <label>{label}</label>
            </div>
            <input type={type} value={value} onChange={onChange} placeholder={placeholder} name={name} />
        </div>
    );
};

export default InputField;

import React, { useState } from "react";
import "../css/Counter.css"

const PasswordChecker = () => {
const [password, setPassword] = useState("");

const handlePasswordChange = (event) => {
    setPassword(event.target.value);
};

let strengthIndicator = "";
let strengthColor = "";

if (password.length < 6) {
    strengthIndicator = "Lemah Bro";
    strengthColor = "red";
} else if (password.length >= 6 && password.length <= 10) {
    strengthIndicator = "Lumayan";
    strengthColor = "orange";
} else {
    strengthIndicator = "GG BRO!";
    strengthColor = "green";
}

return (
    <div className="password-container">
    <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Masukkan password"/>
    <div
        style={{
        color: strengthColor,
        marginTop: "10px",
        fontWeight: "bold",
        }}>
        {strengthIndicator}
    </div>
    </div>
);
};

export default PasswordChecker;

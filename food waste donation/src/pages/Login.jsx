import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please fill all fields");
      return;
    }

    alert("Login Successful!");
    navigate("/home");
  };

  return (
    <div className="login-page">

      <div className="login-left">
        <h1> FoodBridge</h1>
        <h2>Reduce Food Waste</h2>

        <p>
          Donate your extra food and help thousands of hungry people.
          Together we can make a better tomorrow.
        </p>

      </div>

      <div className="login-right">

        <form className="login-card" onSubmit={handleLogin}>

          <h2>Welcome Back 👋</h2>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button type="submit">
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;
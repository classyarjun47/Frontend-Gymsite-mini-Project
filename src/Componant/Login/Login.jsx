import React from "react";
import "./login.css";

function Login() {
  return (
    <>
    <div className="loginpage">

   
    <div className="contain">
    <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <form className="form1">
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username"/>

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password"/>

        <button>Log In</button>
      
    </form>
    </div>
    </div>
    </>
  );
}

export default Login;

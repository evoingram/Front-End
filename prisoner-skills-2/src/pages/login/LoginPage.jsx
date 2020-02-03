import React from "react";
import SignUp from "../../components/signup/SignUp";
import SignIn from "../../components/login/SignIn"

const LoginPage = () => (
    <div className="login-page">
        <SignUp />
        <SignIn />
    </div>
);

export default LoginPage;
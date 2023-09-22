import React, { useState } from "react";
import LoginHeader from "./LoginHeader";
import "./style.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const onClickLogin = (e) => {
        if (email.length !== 0 && password.length !== 0) {
            e.preventDefault();
            console.log({
                email: email,
                password: password
            });
            setEmail("");
            setPassword("");
        }
        else{
            alert("username or password is empty")
        }
    };
    return (
        <>
            <LoginHeader />
            <div className="flex-grow-1 centered">
                <div className="form-container">
                    <form className="p-3 d-flex flex-column align-items-center mb-3">
                        <h4 className="w-100 text-center">Đăng nhập</h4>
                        <a
                            href="https://www.facebook.com/no.xungthien"
                            className="pt-2 w-100 centered"
                        >
                            <div className="align-itemas-center d-flex w-75 rounded-3 border border-primary justify-content-center px-3 py-2">
                                <img
                                    width="30"
                                    height="30"
                                    src="https://img.icons8.com/color/48/facebook.png"
                                    alt="facebook"
                                />
                                <p className="my-auto">
                                    Đăng nhập với facebook
                                </p>
                            </div>
                        </a>
                        <div className="w-100 my-3 position-relative">
                            <hr />
                            <div className="position-absolute or">
                                Hoặc đăng nhập bằng email
                            </div>
                        </div>
                        <div className="w-100">
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                autoComplete="false"
                                className="w-100 border rounded px-3 input"
                                value={email}
                                onChange={(e) => onChangeEmail(e)}
                            />
                        </div>
                        <div className="w-100">
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                autoComplete="false"
                                className="w-100 border rounded px-3 input"
                                value={password}
                                onChange={(e) => onChangePassword(e)}
                            />
                        </div>
                        <button
                            className="w-100 bg-primary rounded border-0 py-2 login-button"
                            onClick={(e) => onClickLogin(e)}
                        >
                            Đăng nhập
                        </button>
                    </form>
                    <div className="border-top my-4 text-center">
                        Bạn chưa có tài khoản?{" "}
                        <a href="#" className="text-primary">
                            Đăng ký ngay
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;

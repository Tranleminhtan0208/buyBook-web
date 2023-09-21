import React from "react";
import LoginHeader from "./LoginHeader";
import "./style.css";

function Login() {
    return (
        <>
            <LoginHeader />
            <div className="flex-grow-1 centered">
                <div className="form-container">
                    <form className="p-3 d-flex flex-column align-items-center">
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
								name="email"
								id="email"
                                placeholder="Email"
                                autoComplete="false"
                                className="w-100 border rounded px-3 input"
                            />
                        </div>
                        <div className="w-100">
                            <input
                                type="password"
                                placeholder="Password"
                                autoComplete="false"
                                className="w-100 border rounded px-3 input"
								name="password"
								id="password"
                            />
                        </div>
						<button className="w-100 bg-primary rounded border-0 py-2 login-button">Đăng nhập</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;

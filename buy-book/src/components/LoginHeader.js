import React from "react";
import "./style.css";
import logo from "../assets/logo-new.png";
function LoginHeader() {
    return (
        <nav className="bg-header">
            <div className="navbar-wrapper container d-flex">
                <div className="logo-wrapper">
                    <a href="#">
                        <img src={logo} className="logo" alt="logo" />
                    </a>
                </div>
                <div className="row flex-grow-1 align-items-center mx-0 menu-wrapper">
                    <a className="col d-flex h-100 align-items-center" href="#">
                        <img
                            className="menu-icon"
                            width="20"
                            height="20"
                            src="https://img.icons8.com/isometric-line/50/experimental-book-isometric-line.png"
                            alt="experimental-book-isometric-line"
                        />
                        Sách
                    </a>
                    <a className="col d-flex h-100 align-items-center" href="#">
                        <img
                            className="menu-icon"
                            width="20"
                            height="20"
                            src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/external-paper-clip-accounting-tanah-basah-glyph-tanah-basah.png"
                            alt="external-paper-clip-accounting-tanah-basah-glyph-tanah-basah"
                        />
                        Văn phòng phẩm
                    </a>
                    <a className="col d-flex h-100 align-items-center" href="#">
                        <img
                            className="menu-icon"
                            width="20"
                            height="20"
                            src="https://img.icons8.com/ios/50/online-store.png"
                            alt="online-store"
                        />
                        Vật dụng
                    </a>
                    <a className="col d-flex h-100 align-items-center" href="#">
                        <img
                            className="menu-icon"
                            width="20"
                            height="20"
                            src="https://img.icons8.com/ios/50/gift--v1.png"
                            alt="gift--v1"
                        />
                        Quà tặng
                    </a>
                    <a className="col d-flex h-100 align-items-center" href="#">
                        <img
                            className="menu-icon"
                            width="20"
                            height="20"
                            src="https://img.icons8.com/ios/50/smartphone--v1.png"
                            alt="smartphone--v1"
                        />
                        Công nghệ
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default LoginHeader;

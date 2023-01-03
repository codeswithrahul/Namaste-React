import React from "react";
import ReactDom from "react-dom/client";
import './index.css';
import Logo from "./assest/logo.png"
import User from "./assest/user.png"

const Header = () =>{
  return(
    <>
      <nav>
        <section className="logo">
          <img src={Logo} alt="" />
        </section>
        <section className="search">
          <input type="search" /> <button>search</button>
        </section>
        <section className="userIcon">
          <img src={User} alt="" />
        </section>
      </nav>
    </>
  )
}

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(Header())
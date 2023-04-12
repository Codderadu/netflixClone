import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.png"
import "./Header.scss"
import {AiOutlineSearch}from "react-icons/ai"


function Header() {
  return <nav className="Header">
    <div className="logo">
    <Link to={'/'}><img src={logo} alt="" /></Link>
    </div>
    <div className="navSearch">
    <Link to="/tvShow">TV Shows</Link>
    <Link to="/movie">Person</Link>
    <Link to="/Recently_added">Recently Added </Link>
    <Link to="/My_Lists">My Lists</Link>
    </div>
        <AiOutlineSearch className="search"/>
  </nav>;
}

export default Header;

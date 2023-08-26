import React, { useContext, useState } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";
import { DataContext } from "../../../context/login.context";

const Header = () => {
  const [navList, setNavList] = useState(false);
  const { isLoggedIn } = useContext(DataContext);
  const storedData = JSON.parse(localStorage.getItem("userData"));
  // console.log(storedData);
  // console.log(isLoggedIn);

  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo">
            <img src="./images/logo.png" alt="" />
          </div>
          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          {!isLoggedIn && (
            <div className="button flex">
              <Link className="links" to="login">
                <i className="fa fa-sign-out"></i> Login
              </Link>
            </div>
          )}
          {isLoggedIn && (
            <Link className="links" to="/profile">
              <div className="flexer">
                <img
                  src={storedData.user.picture_url}
                  className="profileImage"
                  alt="profile image"
                />
                <p>{storedData.user.firstName}</p>
              </div>
            </Link>
          )}
          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

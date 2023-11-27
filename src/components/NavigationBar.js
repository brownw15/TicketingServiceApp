import React, {useState} from "react";
import logo from "../images/logo.svg";
import {Link, NavLink} from "react-router-dom";
//console.log(logo);

export const NavigationBar = () => {
    const [active, setActive] = useState(false);
    const [user, setUser] = useState(sessionStorage.getItem('login'));

    // function logOut(){
    //   sessionStorage.removeItem('login');
    //   console.log(sessionStorage.setItem("login", ""));
    // }


    //onClick={logOut()}

    const closeVideo = () => {
        document.getElementById("video").pause();
        setActive(false);
    }

    return (
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <Link className="navbar-item" to="/">
                    <img src={logo} />
                </Link>

                <div className="navbar-items">
                    {user ? (
                        <span>Hello {user}</span>
                    ) : ("")}
                    <NavLink className="navbar-item" to="/dashboard" activeClassName="activeLink">My Dashboard</NavLink>
                    <NavLink className="navbar-item" to="/landing" activeClassName="activeLink">Search</NavLink>
                    <NavLink className="navbar-item" to="/create" activeClassName="activeLink">Contact Us</NavLink>
                    <a className="navbar-item" id="howtolink" onClick={() => setActive(true)}>How-To</a>
                    {user == "admin@admin.com" ? (
                        <NavLink className="navbar-item" to="/articleCreate" activeClassName="activeLink">Article Editor</NavLink>
                    ) : ("")}
                    <NavLink className="navbar-item log-in" to="/" exact onClick={() => {setUser(null)}} activeClassName="activeLink hide">Log Out</NavLink>
                </div>
            </nav>
            <div id="videoClose" onClick={() => closeVideo()} className={active ? "visible" : "hidden"}>
                <p>Click anywhere to close</p>
            </div>
            <div id="videoPopup" className={active ? "visible" : "hidden"}>
                <video id="video" controls>
                    <source src="video/RVHelpdeskTutorial.webm" type="video/webm" />
                    <source src="video/RVHelpdeskTutorial.mp4" type="video/mp4" />
                </video>
                <p>Click anywhere to close</p>
            </div>
        </div>
    )
};

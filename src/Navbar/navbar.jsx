import React from 'react'
// import logo from "../images/logo.png"
// import mail from "../images/mail.png"
// import "./navbar.css"
function Navbar() {
  return (
    <div>
        <div id="navbar">
            <div className="logo">
                <img src="./images/logo2.png" alt="" />
            </div>
            <div className="links text-xl">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Skills</a></li>
            </div>
            <div className="Usman">
                {/* <button><img src="./images/mail.png" alt="photo" />Hire me</button> */}
            </div>
            <div className="ham">
            </div>
        </div>
    </div>
  );
}

export default Navbar
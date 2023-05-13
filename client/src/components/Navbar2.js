import React from 'react'
import "../components/assets/navbar.css";
import { Link } from "react-router-dom";


export default function Navbar2() {

  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links li");
  
  hamburger.addEventListener('click', ()=>{
     //Animate Links
      navLinks.classList.toggle("open");
      links.forEach(link => {
          link.classList.toggle("fade");
      });
  
      //Hamburger Animation
      hamburger.classList.toggle("toggle");
  });




  return (
    <>
    
   
    <nav>
        <div className="logo">
          <img src="logo.svg" alt="Logo Image" />
        </div>
        <div className="hamburger">
          <div className="line1" />
          <div className="line2" />
          <div className="line3" />
        </div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Solutions</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><button className="login-button" href="#">Login</button></li>
          <li><button className="join-button" href="#">Join</button></li>
        </ul>
      </nav>
    
    </>
  )
}

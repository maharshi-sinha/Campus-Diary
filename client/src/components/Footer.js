import React from 'react'
import campus_diary_logo from"./img/campus_diary_logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer(props) {

  return (
    <>
     <footer className="footer-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
              <h4>About Us</h4>
              <p>MYTHBUSTERS....</p>
              <Link className="navbar-brand logo_h d-none d-xl-block" to="/"><img src={campus_diary_logo} alt="campus_diary_logo" /></Link>
            </div>
            <div className="col-xl-3 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
              <h4>Contact Info</h4>
              <ul>
                <li>Address: Jagadalpur</li>
                <li><a to>Phone: +91 12324343141</a></li>
                <Link><a to="https://www.google.co.in/">Email: MythBusters121@gmail.com</a></Link>
              </ul>
            </div>
            <div className="col-xl-2 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
              <h4>Important Link</h4>
              <ul>
                
                <li><Link to="/">Home</Link></li>
                <li><Link to="/notes">Notes</Link></li>
                <li><Link to="/view">View</Link></li>
                <li><Link to="#">Events</Link></li>
                <li><Link to="#">Explore</Link></li>
                <li><Link to="#">About Us</Link></li>
              </ul>
            </div>
            <div className="offset-xl-1 col-xl-3 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
              <h4>Blogs</h4>
              <p><a to>Click here to Read Latest blogs</a></p>
            </div>
          </div>
          <div className="footer-bottom row align-items-center text-center text-lg-left">
            <p className="footer-text m-0 col-lg-8 col-md-12">
              Copyright @2023 All rights reserved  - MythBusters
            </p>
            <div className="col-lg-4 col-md-12 text-center text-lg-right footer-social">
            
                
                  <a href="#">
                    <InstagramIcon />
                  </a>
                
                  <a href="#">
                    <GitHubIcon />
                  </a>
               
                  <a href="#">
                    <LinkedInIcon />
                  </a>
                
                  <a href="#">
                    <EmailIcon />
                  </a>
                
              
            </div>
          </div>
        </div>
      </footer>
    
    
    
    </>
  )
}

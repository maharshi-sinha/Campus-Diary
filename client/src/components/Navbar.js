import React from 'react';
import {Link} from 'react-router-dom';

import campus_diary_logo from"./img/campus_diary_logo.png";

export default function Navbar() {
  return (
    <>
    <header className="header_area">
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container box_1620">
              <a className="navbar-brand logo_h" href="/"><img src={campus_diary_logo} alt="campus_diary_logo" /></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                <ul className="nav navbar-nav menu_nav justify-content-end">
                  <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li> 
                  <li className="nav-item"><Link className="nav-link" to="/notes">Notes</Link> </li>
                  <li className="nav-item"><Link className="nav-link" to="/view">View</Link>
                  </li><li className="nav-item submenu dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Community</a>
                    <ul className="dropdown-menu">
                      <li className="nav-item"><a className="nav-link" href="Community Page/community.html">Events</a>                 
                      </li><li className="nav-item"><a className="nav-link" href="Community Page/community.html">Blogs</a>                 
                      </li></ul>
                  </li>
                  <li className="nav-item"><Link className="nav-link" to="#">About Us</Link></li>
                </ul>
                <div className="nav-right text-center text-lg-right py-4 py-lg-0">
                  <Link className="button button-outline button-small" to="/register">Add Me</Link>
                </div>
              </div> 
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

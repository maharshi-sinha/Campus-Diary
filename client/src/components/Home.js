import React from "react";
import Footer from "./Footer";
import "../components/assets/navbar.css";
import Navbar from './Navbar';
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
        <Navbar/>
    

        <section className="hero-banner text-center">
        <div className="container">
          <p className="text-uppercase">An Initiative</p>
          <h1>Know Your Seniors</h1>
          <p className="hero-subtitle">“The Spirit Never Ages. It Stays Forever Young.”</p>
          <Link className="button button-outline" to="/view">View</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link className="button button-outline " to="/register">Add Me</Link>
        </div>
      </section>


      <Footer/>
    </>
  );
}

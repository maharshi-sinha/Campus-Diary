
import React from 'react';
import "../components/assets/section.css";
import "../components/assets/style.css";
// import "../components/assets/cards.css";
import { Link } from "react-router-dom";
import Footer from './Footer';
import Navbar from './Navbar';
import Year1 from"./images/year1.png";




export default function View() {
  return (
    <>
    <Navbar/>
    <section className="hero-banner hero-banner-sm ">
    <br />
    <h1 align="center"> Various Batches </h1>
    <br />
    <div className="container">
      <div className="row">
        
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <figure className="snip1527">
            <div className="image">
              <img src={Year1} alt="pr-sample25" />
            </div>
            <figcaption>
              <h3>Batch 2021-2025</h3>
              <p>
                You will never have more energy or enthusiasm, hair, or brain
                cells than you have today.
              </p>
            </figcaption>
            <Link to="/view/batch2125" />
          </figure>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <figure className="snip1527">
            <div className="image">
              <img src={Year1} alt="pr-sample25" />
            </div>
            <figcaption>
              <h3>Batch 2020-2024</h3>
              <p>
                Self-discipline is the magic power that makes you virtually
                unstoppable.
              </p>
            </figcaption>
            <Link to="/view/batch2024" />
          </figure>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <figure className="snip1527">
            <div className="image">
              <img src={Year1} alt="pr-sample25" />
            </div>
            <figcaption>
              <h3>Batch 2019-2023</h3>
              <p>
                Definiteness of purpose is the starting point of all achievement.
              </p>
            </figcaption>
            <Link to="/view/batch1923" />
          </figure>
        </div>
        
       
        
      </div>
    </div>
  </section>
  <Footer/>
  </>
  )
}

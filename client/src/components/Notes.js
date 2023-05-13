import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import IT from"./img/IT.jpg";
import "../components/assets/notes.css";
import Mechanical from"./img/Mechanical.jpg";
import Electrical from"./img/Electrical.jpg";
import Civil from"./img/Civil.jpg";
import ET from"./img/ET.jpg";
import Maths from"./img/Maths.png";

export default function Notes() {
  return (
    <>
    <Navbar/>
  <section className="hero-banner hero-banner-sm text-center">
    <div className="container">
      <h1> Notes </h1>
    </div>
  </section>
  {/*================ Banner SM Section end =================*/}
  {/*================ Main section start =================*/}
  <section className="section-margin mb-5">
    <div className="container text-center">
      <br />
      <h1> &nbsp;&nbsp;Coming Soon.....</h1>
      <br />
      <div className="row">
        <div className="col-lg-4 col-sm-6">
          <div className="card-service text-center">
            <div className="service-icon">
              <img src={IT} alt="" />
            </div>
            <h3>IT/CS </h3>
            <p></p>
            <a className="button button-outline" href="#">
              View
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a className="button button-outline " href="#">
              Add Me
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="card-service text-center">
            <div className="service-icon">
              <img src={Mechanical} alt="" />
            </div>
            <h3>Mechanical</h3>
            <p></p>
            <a className="button button-outline" href="#">
              View
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a className="button button-outline " href="#">
              Add Me
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="card-service text-center">
            <div className="service-icon">
              <img src={Electrical} alt="" />
            </div>
            <h3>Electrical</h3>
            <p> </p>
            <a className="button button-outline" href="#">
              View
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a className="button button-outline " href="#">
              Add Me
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="card-service text-center">
            <div className="service-icon">
              <img src={Civil} alt="" />
            </div>
            <h3>Civil</h3>
            <p> </p>
            <a className="button button-outline" href="#">
              View
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a className="button button-outline " href="#">
              Add Me
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="card-service text-center">
            <div className="service-icon">
              <img src={ET} alt="" />
            </div>
            <h3>Electronics &amp; Telecommunication </h3>
            <p></p>
            <a className="button button-outline" href="#">
              View
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a className="button button-outline " href="#">
              Add Me
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="card-service text-center">
            <div className="service-icon">
              <img src={Maths} alt="" />
            </div>
            <h3> Mathematics </h3>
            <p></p>
            <a className="button button-outline" href="#">
              View
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a className="button button-outline " href="#">
              Add Me
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*================ Main section end =================*/}
  {/*================ Testimonial section start =================*/}
  <section className="bg-gray section-padding">
    <div className="container">
      <div className="section-intro pb-85px text-center">
        <h4>
          {" "}
          Those who dare to think the impossible are the ones, who have crossed
          all human Limitations.
        </h4>
        <div className="section-style" />
      </div>
    </div>
  </section>
  <Footer/>
</>

  )
}

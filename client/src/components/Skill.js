import React from "react";
import "../components/assets/skill.css";
import Navbar2 from "./Navbar2";
import Footer from "./Footer";
export default function Skill() {
  return (
    <>
      <Navbar2 />
      <h1 className="skillTitle">My Skills</h1>
      <div className="skillFirst">
        <div className="card">
          <img
            src="https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Front-End-Developer</h5>s
            {/* <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p> */}
            {/* <a href="#" className="btn btn-primary">
              Go somewhere
            </a> */}
          </div>
        </div>

        <div className="card">
          <img
            src="https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Video Editing</h5>
          
            {/* <a href="#" className="btn btn-primary">
              Go somewhere
            </a> */}
          </div>
        </div>

        <div className="youtube">
          <div className="card youtubeCard">
            <iframe
              src="https://www.youtube.com/embed/cY0mH_3Sv2E"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div className="card-body">
              <h5 className="card-title">Youtube</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="skillSecond">
        <div className="card">
          <img
            src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Thumbnail Design</h5>
           
            {/* <a href="#" className="btn btn-primary">
              Go somewhere
            </a> */}
          </div>
        </div>

        <div className="card">
          <img
            src="https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Graphic Design</h5>
          
            {/* <a href="#" className="btn btn-primary">
              Go somewhere
            </a> */}
          </div>
        </div>

        <div className="card">
          <img
            src="https://images.pexels.com/photos/6469/red-hands-woman-creative.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Blogging</h5>
           
            {/* <a href="#" className="btn btn-primary">
              Go somewhere
            </a> */}
          </div>
        </div>



      </div>
      <div className="thirdone">
       
      </div>
      <Footer />
    </>
  );
}

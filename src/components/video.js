import React, { Component } from "react";
import "../styles/video.css";
import Vid from "../asset/Black.mp4";
import '../styles/home.css';


export default class Video extends Component {
  render() {
    return (
      <div>
        <section class="showcase">
          <div class="video-container m">
            <video src={Vid} autoplay="true" muted loop></video>
          </div>
          <div class="video-container pc">
            <video src={Vid} autoplay="true" muted loop></video>
          </div>
          <div data-aos="fade-out" class="content" style={{ zIndex: "0" }}>
            <h1>LUCRATIVE INVESTING</h1>
            <br/>
            <span className="hunder" >
                        {/* <b>BSCPOOL</b> is the best in making the safest profit strategies and mechanics where equal profit sharing is given the top priority. 
                        our goal is to maximise stakeholders' profits and to constantly develop the protocol to be a competitive profit-making strategy and services deployment.
                        <br/>
                        <br/> */}
                        <b>We are committed to bring innovative strategies and projects in coming time to give wings to our financial goals.</b>

                        </span>
          </div>
        </section>
      </div>
    );
  }
}

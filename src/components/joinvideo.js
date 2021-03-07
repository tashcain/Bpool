import React, { Component } from "react";
import "../styles/joinvideo.css";
import Vid from "../asset/Black.mp4";
import '../styles/home.css';
import { Container, Row, Col} from 'react-bootstrap';
import Countdown from "react-countdown";




export default class Joinvideo extends Component {
  
  render() {
    // Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
        <div>
            <span className="stak">Stake ends in</span>
        <br/>
      <span className="timer" style={{color:"white"}}>
        {days}:{hours}:{minutes}:{seconds}
      </span>
        </div>
    );
  }
};
    return (
      <div>
        <section class="showcasej">
          <div class="video-container m">
            <video src={Vid} autoplay="true" muted loop></video>
          </div>
          <div class="video-container pc">
            <video src={Vid} autoplay="true" muted loop></video>
          </div>
          <div style={{paddingBottom:"200px",padding: "63px 0 106px 0"}}>
            <Container>
                <Row>
                    <Col data-aos="fade-right"  lg="5" md="4" sm="3">
                        <span className="heading" >Join the Club</span>
                        <br/>
                        <br/>
                        <span className="hunder" >
                            Launchpool brings together stakeholders on an equal footing. Launchpool harnesses their strengths, and aligns all stakeholders so that the sum is greater than its constituent parts.
                        </span>
                        
                    </Col>
                    
                    <Col className="md-2">
                        <div className = "joinl">
                            <div style={{fontSize: "1.4rem", color: "white"}}>
                            Launchpool investors have shown over $0.00 interest in earning $LPOOL
                            </div>
                            <div>
                            
                            <Countdown date={Date.now() + 1000000000} renderer={renderer} />
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
            
            </div>
            </section>
      </div>
    );
  }
}

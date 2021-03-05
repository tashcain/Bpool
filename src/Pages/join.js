import React, {useEffect} from  'react';
import { Container, Row, Col} from 'react-bootstrap';
import Joinheader from '../components/joinHeader';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Countdown from "react-countdown";
import '../styles/join.css';
import Footer from '../components/footer';

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
      <span className="timer" style={{color:"#182B49"}}>
        {days}:{hours}:{minutes}:{seconds}
      </span>
        </div>
    );
  }
};

function Join(){
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []); 
    return (
        <div>
            <Joinheader/>
            <div style={{paddingBottom:"200px", background: "rgb(243,186,47)",padding: "63px 0 106px 0"}}>
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
            <div style={{color : "white" ,background:"black", padding: "70px 0 80px 0 "}}>
                <Footer/>
           </div>

        </div>
    );
}

export default Join;
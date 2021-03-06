import React,{useEffect} from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import '../styles/home.css';
import Aos from 'aos';
import 'aos/dist/aos.css';



function Landbody(){
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []); 
    return(
        <div>
            <Container>
                <Row>
                    <Col data-aos="fade-right">
                        <span className="heading" > LUCRATIVE INVESTING</span>
                        <br/>
                        <br/>
                        <span className="hunder" >
                        <b>Bpool</b>        New Era of investment, incentives all small and big investors.
                        </span>
                        <br/>
                        <br/>
                        <span className="hunder" >
                        <b>BSCPOOL</b> is an innovative solution towards a sustainable farming model and built on smart chain where small investors can participate by paying minimal gas fee.
                        <br/>
                        <b>BSCPOOL</b> is the best in making the safest profit strategies and mechanics where equal profit sharing is given the top priority. 
                        our goal is to maximise stakeholders' profits and to constantly develop the protocol to be a competitive profit-making strategy and services deployment.
                        

                        <br/>
                        <br/>
                        <b>We are committed to bring innovative strategies and projects in coming time to give wings to our financial goals.</b>

                        </span>
                        
                        <br/>
                        <br/>
                        <b className="hunder" >
                        Join us: we are excited to launch product for cummunity
                        </b>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    );
}

export default Landbody;
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
                        <span className="heading" >Egalitarian Investing</span>
                        <br/>
                        <br/>
                        <span className="hunder" >
                        <b>Bpool</b> believe all project stakeholders are as important as each other. Investment funds and communities should work side by side on projects, on the same terms, towards the same goals.
                        </span>
                        <br/>
                        <br/>
                        <span className="hunder" >
                        <b>Bpool</b> harnesses their strengths, and aligns their incentives, so that the sum is greater than its constituent parts.
                        </span>
                        <br/>
                        <br/>
                        <br/>
                        <b className="hunder" >
                        Join us! We’re excited to start this journey together.
                        </b>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    );
}

export default Landbody;
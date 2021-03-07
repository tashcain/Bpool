import React, {useEffect} from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import '../styles/home.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Home4(props) {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []); 
    return (
        <div>
            <Container>
                <Row>
                    <Col data-aos="fade-up" align="center">
                        <h1 className="heading heading2">How Bscpool staking works</h1>
                        <br/>
                        <span className="hunder">
                        Most notably project tokens can be obtained at the same price large crypto investment funds get them, promoting equality among stakeholders. This also provides transparency and negates any party having any advantages over another.
                        </span>
                    </Col>
                </Row>
                
            </Container>
        </div>
    );
}

export default Home4;
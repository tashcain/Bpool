import React, { useEffect } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Card from './Card';
import '../styles/home.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Img1 from '../asset/yellowcard.png';
import Img2 from '../asset/yelpoke.png';
import Img3 from '../asset/yellownote.png';


function Home2(props) {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []); 

    
    return (
        <div>
            <Container>
                <Row>
                    <Col data-aos="fade-up"  align="center">
                        <h1 className="heading heading2">Upcoming in Bpool</h1>
                        <br/>
                        <span  className="hunder">
                            Bscpool connects varied stakeholders in the crypto industry, including funds,<br/> communities, marketers and experts, incentivising all.
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col data-aos="fade-right">
                        <Card img = {Img1}   head = "Title" data="dex is to be released at the Binance smart chain wherein you'll be given minimal gas fee and the charts of upcoming projects"/>
                    </Col>
                    <Col data-aos="fade-down">
                        <Card fs = "54px" img= {Img2} head = "Title" data="Coming Soon"/>
                    </Col>
                    <Col data-aos="fade-up">
                        <Card fs = "54px" img ={Img3} head = "Title" data="Coming Soon"/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home2;
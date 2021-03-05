import React, { useEffect } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Card from './Card';
import '../styles/home.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Img1 from '../asset/coffee.svg';
import Img2 from '../asset/screen.svg';
import Img3 from '../asset/refresh.png';


function Home2(props) {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []); 

    
    return (
        <div>
            <Container>
                <Row>
                    <Col data-aos="fade-up"  align="center">
                        <h1 className="heading heading2">Launchpool $LPOOL Explained</h1>
                        <br/>
                        <span  className="hunder">
                            Launchpool connects varied stakeholders in the crypto industry, including funds,<br/> communities, marketers and experts, incentivising all.
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col data-aos="fade-right">
                        <Card img = {Img1}   head = "Title" data="Funds provide a portion of their deal flow to the Launchpool platform on exactly the same terms they receive as early investors. $LPOOL holders stake $LPOOL to access a related portion of the deal on offer."/>
                    </Col>
                    <Col data-aos="fade-down">
                        <Card img= {Img2} head = "Title" data="Funds provide a portion of their deal flow to the Launchpool platform on exactly the same terms they receive as early investors. $LPOOL holders stake $LPOOL to access a related portion of the deal on offer."/>
                    </Col>
                    <Col data-aos="fade-up">
                        <Card img ={Img3} head = "Title" data="Funds provide a portion of their deal flow to the Launchpool platform on exactly the same terms they receive as early investors. $LPOOL holders stake $LPOOL to access a related portion of the deal on offer."/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home2;
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
                        <Card img = {Img1}   head = "Title" data="Funds provide a portion of their deal flow to the Bscpool platform on exactly the same terms they receive as early investors. $Bpool holders stake $Bpool to access a related portion of the deal on offer."/>
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
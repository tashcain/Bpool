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
                        <h1 className="heading heading2">Bscpool $Bpool Explained</h1>
                        <br/>
                        <span  className="hunder">
                            Bscpool connects varied stakeholders in the crypto industry, including funds,<br/> communities, marketers and experts, incentivising all.
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col data-aos="fade-right">
                        <Card img = {Img1}   head = "Title" data="Funds provide a portion of their deal flow to the Bscpool platform on the precisely the same which is received as early Investors.$BPOOL stake $BPOOL to access an associated portion of the very deal on offer."/>
                    </Col>
                    <Col data-aos="fade-down">
                        <Card img= {Img2} head = "Title" data="$BPOOL holders are a group of investors, influencers, customers, growth hackers, trade and knowledgeable industry participants who are brought together to form an incentivised community around the project they have invested in."/>
                    </Col>
                    <Col data-aos="fade-up">
                        <Card img ={Img3} head = "Title" data="$BPOOL is open to all, simply stake one of the tokens found on the staking page to start earning your $BPOOL for free. You can withdraw your stake and $BPOOL at any time."/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home2;
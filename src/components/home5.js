import React, {useState, useEffect} from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Infocard from './Infocard';
import '../styles/home5.css';
import '../styles/button.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Home5(){
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []); 
    function handleBtn2(){
        setHead("There are five key benefits for new projects who participate in the Launchpool:");
        setData(["Promotion through association with some of the industry’s most recognisable names.","Leverage contacts and industry know-how of some of the most successful funds in the sector."," A ready made community keen to engage.", " A diverse customer base", "Capital"]);
    }
    function handleBtn1(){
        setHead("There are four key benefits for $LPOOL token holders:");
        setData(["Access to projects at the earliest rounds, enabling investors to access best prices without the associated minimum threshold reserved for investment funds."     ,"Investment through a regulatory compliant means.",     "Peace of mind investments are made in to bona fide projects that have been vetted on a number of levels."     ,"Chance to become a meaningful part of new project’s communities."]);
    }
    function handleBtn3(){
        setHead("There are four key benefits for investment funds who participate in the Launchpool:");
        setData(["Engaged communities that can leverage the power of the crowd and turbocharge growth hacking.","Community curation and feedback. Deeper insights into why and how projects are successful."," Secure more top quality projects."," Opportunity to give something back and to be closer to the crypto community."]);
    }
    const [head, setHead] = useState("There are four key benefits for $LPOOL token holders:")
    const [data, setData] = useState(["Access to projects at the earliest rounds, enabling investors to access best prices without the associated minimum threshold reserved for investment funds."," Investment through a regulatory compliant means.","Peace of mind investments are made in to bona fide projects that have been vetted on a number of levels.", "Chance to become a meaningful part of new project’s communities."]);

    return(
        <div>
            <Container>
                <Row>
                    <Col lg="4" md="4" sm="3">
                    <h2>Benefits for</h2>
                    <br/>
                    <br/>
                    <button onClick={handleBtn1} class="custom-btn btn-13">Bpool Holders</button>
                        <br/>
                        <br/>
                    <button onClick={handleBtn2} class="custom-btn btn-13">New Projects</button>
                        <br/>
                        <br/>
                    <button onClick={handleBtn3} class="custom-btn btn-13">Investment Funds</button>
                        <br/>
                        <br/>
                        {/* <div onClick={handleBtn1} className="togglebtn">
                            Button 1
                        </div>
                        <br/>
                        <br/>
                        <div onClick={handleBtn2} className="togglebtn">
                            Button 1
                        </div>
                        <br/>
                        <br/>
                        <div onClick={handleBtn3}className="togglebtn">
                            Button 1
                        </div> */}
                    </Col>
                    <Col data-aos="fade-right" >
                        <Infocard head = {head} data = {data}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home5;
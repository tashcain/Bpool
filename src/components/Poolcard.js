import React from 'react';
import '../styles/poolcard.css';
import {Row, Col, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import '../styles/button.css';

function Pcard(props) {
    return (
        <div>
            <div class="bg-dark cardj card-1">
                
                <Container>
                    <Row>
                        <Col >
                            <div >
                                Bondly
                            </div>
                        </Col>
                        <Col>
                            <div style={{textAlign:"right"}}>
                                <p>Available</p>
                                
                                <p>0</p>
                                
                                <p>APY : 472.30%</p>
                                <p>APY : 472.30%</p>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Link to="/join"><button class="custom-btnp btn-13">Approve for staking</button></Link>

                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Pcard;
import React from "react";
import Pcards from '../components/Poolcard';
import { Container, Row, Col} from 'react-bootstrap';


function Poolcards(){
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Pcards/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Poolcards;
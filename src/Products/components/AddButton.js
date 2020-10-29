import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const AddButton = ({ handleShow }) => {
    return (
        <Container className="pb-3">
            <Row>
                <Col>
                    <Button variant="primary float-right" onClick={handleShow}>
                        Add Card
                    </Button>
                </Col>
            </Row>
        </Container>   
    )
}

export default AddButton;
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-center py-3">{title}</h1>
                </Col>
            </Row>
        </Container>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;
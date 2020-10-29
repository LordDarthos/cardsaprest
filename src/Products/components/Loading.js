import React from 'react';
import { Container } from 'react-bootstrap';

const Loading = () => {
    return (
        <Container>
            <div className="columns is-centered">
                <div className="spinner-border" role="status"style={{width:200, height:200}}>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </Container>
    )
}

export default Loading;
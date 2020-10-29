import React from 'react';
import { Container, Section, Button } from 'react-bulma-components';

const deleteButton = ({ onClick }) => {
    return (
        <Section>
            <Container>
                <div className="is-pulled-right">
                    <Button onClick={onClick} color="primary">Delete</Button>
                </div>
            </Container>
        </Section>
    )
}

export default deleteButton;
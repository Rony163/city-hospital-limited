import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const { name, img, description } = props.service;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="text-info text-center">{name}</Card.Title>
                        <Card.Text> {description}</Card.Text>
                    </Card.Body>
                    <Button variant="outline-info">Make an Apointment</Button>
                </Card>
            </Col>
        </div>
    );
};

export default Service;
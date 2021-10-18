import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Service = (props) => {
    const { id, name, img, description } = props.service;
    // console.log(props.service)
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="text-info text-center">{name}</Card.Title>
                        <Card.Text> {description}</Card.Text>
                    </Card.Body>
                    <NavLink to={`details/${id}`}>
                        <Button variant="outline-info">Details</Button>
                    </NavLink>
                </Card>
            </Col>
        </div >
    );
};

export default Service;
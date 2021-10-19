import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { id, name, img, description } = props.service;
    // console.log(props.service)
    return (
        <div>
            <div>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="text-info text-center">{name}</Card.Title>
                        <Card.Text> {description}</Card.Text>
                    </Card.Body>
                    <div className="d-flex justify-content-center">
                        <Link to={`details/${id}`}>
                            <Button className="mb-2" variant="outline-info">Details</Button>
                        </Link>
                    </div>
                </Card>
            </div>
        </div >
    );
};

export default Service;
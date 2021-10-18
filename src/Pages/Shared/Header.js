import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div>
            <Navbar expand="lg" className="ms-5">
                <Container fluid>
                    <img style={{ width: '30px' }} src={logo} alt="" />
                    <Navbar.Brand className="ms-3" href="#">City Hospital</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 ms-3"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/doctors">Doctors</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Button variant="outline-info">Make an Apointment</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
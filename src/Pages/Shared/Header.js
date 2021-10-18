import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <Navbar fixed='top' expand="lg" className="bg-dark">
                <Container fluid>
                    <img style={{ width: '30px' }} src={logo} alt="" />
                    <Navbar.Brand className="ms-3 text-info" href="#">City Hospital</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 ms-3"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={HashLink} className="text-info" to="/home">Home</Nav.Link>
                            <Nav.Link as={HashLink} className="text-info" to="/home#services">Services</Nav.Link>
                            <Nav.Link as={HashLink} className="text-info" to="/doctors">Doctors</Nav.Link>
                            <Nav.Link as={HashLink} className="text-info" to="/registration">Registration</Nav.Link>
                        </Nav>
                        {user?.email ?
                            <div className='d-flex flex-column flex-lg-row'>
                                <Nav.Link onClick={logout} className="text-info me-2" as={Link} to='/login'>Logout</Nav.Link>
                                <span className='mt-2 text-info m-2'>Sign in as: {user.displayName}</span>
                            </div>
                            :
                            <div>
                                <Nav.Link className="text-info me-2" as={Link} to='/login'>Login</Nav.Link>
                            </div>
                        }
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
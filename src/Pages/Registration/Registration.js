import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { useHistory } from "react-router";
import useAuth from '../../hooks/useAuth';

const Registration = () => {
    const { registerNewUser, setUserName } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();
    const history = useHistory();
    //    getname
    const handleNameChange = e => {
        setName(e.target.value);
    }

    //    getemail
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    //    getpassword
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleSignUp = (e) => {
        e.preventDefault();
        console.log(email, password, name);
        console.log(password.length);
        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must contain 2 uppercase letter');
            return;
        }
        registerNewUser(email, password)
            .then(() => {
                alert('Registration Succesful!!! Welcome to City Hospital')
                history.push('/home');
                setUserName(name);
            })
            .catch((error) => {
                setError(error.message);
            })
    }

    return (
        <Form onSubmit={handleSignUp} className="container">
            <div className="d-flex login-container">
                <div>
                    <h1>Create an account</h1>
                    <p>Register a new account in a minute.</p>
                    <input onBlur={handleNameChange} className="style" type="text" placeholder="Your Name" required />
                    <br />
                    <input onBlur={handleEmailChange} className="style" type="email" name="Email" id="" placeholder="Email Address" required />
                    <br />
                    <input onBlur={handlePasswordChange} className="style" type="password" name="Password" id="" placeholder="Password" required />
                    <br />
                    <p className="text-danger">{error}</p>
                    <br />
                    <button type="submit" className="style register-design">Register</button>
                    <p className="ms-5 ps-3"><small>or register with</small></p>
                    <NavLink className="account" to="/login">
                        <p className="ms-4">Already have an account?</p>
                    </NavLink>
                </div>
            </div>
        </Form>
    );
};

export default Registration;
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import initializeAuthentication from '../Login/Firebase/firebase.init';
import { Form } from 'react-bootstrap';
import { useHistory } from "react-router";
initializeAuthentication();

const Registration = () => {
    const auth = getAuth();
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
        registerNewUser(email, password);
    }
    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setError('');
                setUserName();

            })

            .catch(error => {
                setError(error.message);
            })
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then((result) => {

        }).catch((error) => {

        });
        alert('Registration Successful!! Now you can login')
        history.push('/login');

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
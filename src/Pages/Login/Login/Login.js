import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import './Login.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Form } from 'react-bootstrap';
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const Login = () => {
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();
    const { signInGoogle } = useAuth();
    const location = useLocation();
    const redirect = location.state?.from || '/home';
    const history = useHistory();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    //    getpassword
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleSignUp = (e) => {
        e.preventDefault();
        console.log(email, password);
        console.log(password.length);
        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must contain 2 uppercase letter');
            return;
        }
        processLogIn(email, password);
    }

    const processLogIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setError('');
                history.push(redirect);
            })

            .catch(error => {
                setError(error.message);
            })
    }


    const manageRedirectory = () => {
        signInGoogle()
            .then(() => {
                history.push(redirect);
            })
    }

    return (
        <Form onSubmit={handleSignUp} className="container mt-5">
            <div className="d-flex login-container">
                <div>
                    <h1 className="ms-4">Login Here</h1>
                    <input onBlur={handleEmailChange} className="style" type="email" name="" id="" placeholder="Enter your email" required />
                    <br />
                    <input onBlur={handlePasswordChange} className="style" type="password" name="" id="" placeholder="Enter your password" required />
                    <p className="text-danger">{error}</p>
                    <button type='submit' className="style register-design">Login</button>
                    <p className="ms-5 ps-4"><small>or login with</small></p>
                    <div className="login-icon">
                        <i style={{ cursor: 'pointer', marginLeft: '80px' }} onClick={manageRedirectory} className="text-danger fab fa-google"></i>
                    </div>
                    <NavLink className="account" to="/registration">
                        <p className="ms-5">New in account?</p>
                    </NavLink>
                </div>
            </div>
        </Form>
    );
};

export default Login;
import React from 'react';

const Apointment = () => {
    return (
        <div className="container">
            <div className="d-flex login-container">
                <div>
                    <h1>Take Apointment</h1>
                    <input className="style" type="text" placeholder="Your Name" required />
                    <br />
                    <input className="style" type="email" name="Email" id="" placeholder="Email Address" required />
                    <br />
                    <input className="style" type="number" name="number" id="" placeholder="Number" required />
                    <br />
                    <input className="style" type="text" placeholder="Problem Topic" required />
                    <br />
                    <button type="submit" className="style register-design">Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default Apointment;
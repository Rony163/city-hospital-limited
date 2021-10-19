import React from 'react';

const Apointment = () => {
    return (
        <div className="container">
            <div className="d-flex login-container">
                <div>
                    <h1>Take Apointment</h1>
                    <input className="style" type="text" placeholder="Your Name" required />
                    <br />
                    <input className="style" type="text" name="number" id="" placeholder="Phone Number" required />
                    <br />
                    <input className="style" type="email" name="Email" id="" placeholder="Email Address" required />
                    <br />
                    <input className="style" type="text" placeholder="Problem Topic" required />
                    <br />
                    <textarea name="" id="" cols="32" rows="4" placeholder="Describe your problem here"></textarea>
                    <br />
                    <button type="submit" className="style register-design">Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default Apointment;
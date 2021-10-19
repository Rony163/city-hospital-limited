import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1 className="text-center text-info mb-4 mt-4">Get In Touch</h1>
            <div className="d-flex flex-lg-row flex-sm-column flex-column align-items-center">

                <input className="rounded fs-4 w-50 ms-3 mb-4" type="text" placeholder="Name" />

                <input className="rounded fs-4 w-50 ms-3 mb-4" type="email" name="" id="" placeholder="Email" />

                <button onClick={() => alert('Thanks For Subscribing')} className="rounded bg-info fs-4 ms-2 mb-4">Subscribe</button>
            </div>
        </div>
    );
};

export default Contact;
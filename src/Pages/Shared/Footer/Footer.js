import React from "react";
import './/Footer.css'

const Footer = () => {
    return (
        <div>
            <div className='bg-dark p-1 mb-1 mt-5'>
                <div className='footer d-flex  mt-5 mb-2 justify-content-around w-100 '>
                    <div>
                        <h6 className='text-white'>About Us</h6>
                        <a href="#">Aim</a>
                        <br />
                        <a href="#">Vision</a>
                        <br />
                        <a href="#">work</a>
                        <br />
                        <a href="#">Testimonials</a>
                    </div>
                    <div>
                        <h6 className='text-white'>Services</h6>
                        <a href="#">Cardiology</a>
                        <br />
                        <a href="#">Neurologist</a>
                        <br />
                        <a href="#">Psychiatry</a>
                        <br />
                        <a href="#">Surgery</a>
                        <br />
                    </div>
                    <div>
                        <h6 className='text-white'>Contact Us</h6>
                        <a href="#">Dhaka</a>
                        <br />
                        <a href="#">Mirpur</a>
                        <br />
                        <a href="#">Uttara</a>
                        <br />
                        <a href="#">Rangpur</a>
                    </div>
                    <div>
                        <h6 className='text-white'>Social Media</h6>
                        <a href="#">
                            <i className="fab fa-facebook-f">
                                <span style={{ marginLeft: "10px" }}>
                                    Facebook
                                </span>
                            </i>
                        </a>
                        <br />
                        <a href="#">
                            <i className="fab fa-instagram">
                                <span style={{ marginLeft: "10px" }}>
                                    Instagram
                                </span>
                            </i>
                        </a>
                        <br />
                        <a href="#">
                            <i className="fab fa-twitter">
                                <span style={{ marginLeft: "10px" }}>
                                    Twitter
                                </span>
                            </i>
                        </a>
                        <br />
                        <a href="#">
                            <i className="fab fa-youtube">
                                <span style={{ marginLeft: "10px" }}>
                                    Youtube
                                </span>
                            </i>
                        </a>
                    </div>

                </div>
                <p className='text-white border-top text-center'>Copyright by  &copy;Minhajul Islam Rony</p>

            </div>

        </div>
    );
};
export default Footer;
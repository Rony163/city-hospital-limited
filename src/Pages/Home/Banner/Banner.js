import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://thememakker.com/templates/oreo/hospital/front/assets/images/slider1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-dark">
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://preview.colorlib.com/theme/docmed/img/banner/xbanner2.png.pagespeed.ic.B9cM6-Ibkd.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption className="text-dark">
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="http://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/revslider/homeslider1/slider-2.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption className="text-dark">
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
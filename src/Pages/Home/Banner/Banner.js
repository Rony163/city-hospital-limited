import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel variant="dark" className="mt-5">
                <Carousel.Item className="mt-2">
                    <img
                        className="d-block w-100"
                        src="https://thememakker.com/templates/oreo/hospital/front/assets/images/slider1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-dark">
                        <h3>Health care For Hole Familiy
                        </h3>
                        <p>In healthcare sector, service escellence is the facility of the hospital as healthcare service provider to consistently.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="mt-2">
                    <img
                        className="d-block w-100"
                        src="https://preview.colorlib.com/theme/docmed/img/banner/xbanner2.png.pagespeed.ic.B9cM6-Ibkd.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption className="text-dark">
                        <h3>Health care For Hole Familiy
                        </h3>
                        <p>In healthcare sector, service escellence is the facility of the hospital as healthcare service provider to consistently.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="mt-2">
                    <img
                        className="d-block w-100"
                        src="http://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/revslider/homeslider1/slider-2.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption className="text-dark">
                        <h3>Health care For Hole Familiy
                        </h3>
                        <p>In healthcare sector, service escellence is the facility of the hospital as healthcare service provider to consistently.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
import React from 'react';

const Advantages = () => {
    return (
        <div>
            <h1 className="text-info text-center">Advantages</h1>
            <div className='mt-3 d-flex flex-lg-row flex-sm-column flex-column shadow p-5 border border-5' >
                <div className='w-50 p-3 ms-5 mb-4'>
                    <h2 className="mb-4">Key Advantages</h2>
                    <div>
                        <li>The most important benefits are cost reduction.</li>
                        <br />
                        <li>we take care of patient satisfaction</li>
                        <br />
                        <li>We are increasing home care and outpatient services</li>
                    </div>
                </div>
                <div>
                    <img className="img-fluid" style={{ width: '600px', borderRadius: '10px' }} src='https://www.demo.unitemplates.com/medico/images/pediatrics/slider_003.jpg' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Advantages;
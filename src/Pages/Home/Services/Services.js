import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useServices();
    return (
        <div>
            {services.length ?
                <Row xs={1} md={3} id="services" className="g-4 m-2 mt-0">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </Row>
                :
                <Spinner style={{ marginLeft: '590px' }} animation="border" variant="danger" />
            }
        </div>
    );
};

export default Services;
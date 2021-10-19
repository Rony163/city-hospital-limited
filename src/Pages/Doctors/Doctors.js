import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctor.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <Row xs={1} md={3} className="g-4 m-2 mt-5">
            {
                doctors.map(doctor => <Doctor
                    key={doctor.id}
                    doctor={doctor}
                ></Doctor>)
            }
        </Row>
    );
};

export default Doctors;
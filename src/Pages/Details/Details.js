import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';

const Details = () => {
    const { id } = useParams();
    const [services] = useServices();
    const [matchService, setmatchService] = useState({});
    const intId = parseInt(id);

    useEffect(() => {
        setmatchService(services.find(service => service.id === intId));
    }, [services, intId])
    console.log(matchService);

    return (
        <div className="d-flex">
            <div>
                <img className="img-fluid w-50" src={matchService?.img} alt="" />
            </div>
            <div>
                <h1>Name: {matchService?.name}</h1>
                <p>{matchService?.description}</p>
                <Button variant="outline-info">Make an Apoinment</Button>
            </div>
        </div >
    );
};

export default Details;
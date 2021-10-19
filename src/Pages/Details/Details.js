import React, { useEffect, useState } from 'react';
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
        <div className='mt-5 d-flex justify-content-center align-items-center flex-lg-row flex-sm-column flex-column shadow p-5 border border-5' >
            <div className='mt-5'>
                <img className="img-fluid" style={{ width: '400px', borderRadius: '10px' }} src={matchService?.img} alt="" />
            </div>
            <div className='w-50 ms-5'>
                <h4>{matchService?.name}</h4>
                <p >{matchService?.description}</p>
            </div>
        </div>
    );
};

export default Details;
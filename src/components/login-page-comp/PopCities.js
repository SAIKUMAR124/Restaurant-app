import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import popularCities from '../../data/PopularCities';
import './PopCities.css';

const PopCities = () => {
    const [cities] = useState(popularCities);

    return (
        <div className='cities-container'>
            <div className='pop-cities'>POPULAR CITIES IN INDIA</div>
            <ul className='popular-cities'>
            {cities.map((city)=>{
                const {id, name, url} = city;

                return <li className={`cities-li`} key={id}>
                   
                        <Link className='link-cities' to={`${url}`}>{name}</Link>
                    
                </li>
            })}
            </ul>
        </div>
    )
}

export default PopCities

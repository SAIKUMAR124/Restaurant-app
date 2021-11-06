import React from 'react';
import { useGlobalLoginContext } from '../../context/LoginContext';
import './FilterHead.css';

const FilterHead = () => {
    const {rest, handleDtime, handleAllRest, handleRating, handleCostLowToHigh, handleCostHighToLow} = useGlobalLoginContext();

    return (
        <div className='fil-main'>
            <div className='fil-count'>{rest.length} Restaurents</div>
            <div className='fil-bundle'>
                <div className='fil-all fill' onClick={handleAllRest} >All</div>
                <div className='fil-time fill' onClick={handleDtime}>Delivery Time</div>
                <div className='fil-rating fill' onClick={handleRating} >Rating</div>
                <div className='fil-rating fill' onClick={handleCostLowToHigh} >Cost: Low to High</div>
                <div className='fil-rating fill' onClick={handleCostHighToLow} >Cost: High to Low</div>
            </div>
        </div>
    )
}

export default FilterHead

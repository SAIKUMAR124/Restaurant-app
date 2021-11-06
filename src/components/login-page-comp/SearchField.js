import React from 'react'
import './SearchField.css'
import { BiCurrentLocation } from 'react-icons/bi'

const SearchField = () => {
    return (
        <div className='search-container'>
            <input className='inp-field' placeholder='Enter your delivery location' />
            <span className='loc-icon'><BiCurrentLocation />Location</span>
            <button className='btn-search'>Find Food</button>
        </div>
    )
}

export default SearchField

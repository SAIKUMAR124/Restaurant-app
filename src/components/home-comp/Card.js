import React from 'react'
import './Card.css'

const Card = ({children}) => {
    return (
        <div className='card-comp' >
            {children}
            <div className='card-view'>View</div>
        </div>
    )
}

export default Card

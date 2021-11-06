import React from 'react'
import './PartTwo.css'

const PartTwo = () => {
    return (
        <div className='part2'>
        <div className='div1'>
            <div className='firstpic pic1'>
                <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf' alt='img' />
                <h3 className='h3'>No Minimum Order</h3>
                <p className='p'>Order in for Yourself or for the group, with no restrictions on order value</p>
            </div>
            <div className='firstpic pic2'>
                <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy' alt='img' />
                <h3 className='h3'>Live Order Tracking</h3>
                <p className='p'>Know where your order is at all times, from the restaurent to your doorstep</p>
            </div>
            <div className='firstpic pic3'>
                <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn' alt='img' />
                <h3 className='h3'>Lightning-Fast Delivery</h3>
                <p className='p'>Experience Swiggy's superfast delivery for food delivered fresh & on time</p>
            </div>
            </div>
        </div>
    )
}

export default PartTwo

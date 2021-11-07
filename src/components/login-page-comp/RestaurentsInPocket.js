import React from 'react'
import './RestaurantsInPocket.css'

const RestaurentsInPocket = () => {
    return (
        <div className='resPocket'>
            <div className='resPocInfo'>
                <h1>Restaurants in your pocket</h1>
                <p>Order from your favorite restaurants & track on the go, with the all-new Swiggy app.</p>
                <div>
                <a href='/' className='nav-btns'>
                    <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp' alt='img' className='google-img' />
                </a>
                <a href='/' className='nav-btns'>
                    <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty' alt='img' className='app-store' />
                </a>
                </div>
            </div>
            <div>
                <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n' alt='img' className='food-img1' />
            </div>
            <div className='pos-ab1'>
                <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn' alt='img' className='food-img2' />
            </div>
        </div>
    )
}

export default RestaurentsInPocket

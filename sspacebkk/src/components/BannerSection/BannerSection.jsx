import React from 'react'
import Banner from '../../assets/img/banner.png'

const BannerSection = () => {
    return (
        <div className='relative flex items-center bg-cover flext-start bg-center text-left h-svh w-full' style={{backgroundImage
            : `url(${Banner})`}}>
            <p className='boostText'>Let's Boost your vibes with us!</p>
            <button className='border rounded mt-6 border-black bg-black text-white hover:bg-white hover:text-black '>Shop now</button>
        </div>
    );
}
export default BannerSection
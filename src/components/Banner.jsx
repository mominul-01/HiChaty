import React from 'react';
import HomeImg from '../assets/Web Home Screen.png'
const Banner = () => {
    return (
        <div className='container mt-[81px]'>
            <div>
                <h1 className='text-[ #000] text-center text-[40px] font-bold'>Let’s connect with HiChaty</h1>
                <h4 className='text-[#4A4A4A] text-[20px] font-medium '>Secure and Easier to Use </h4>

                <p className='text-[16px] text-[#4A4A4A] leading-9 '>Provide you to more Connectivity with <br />
                    <span className='text-[#8881B9] uppercase font-bold leading-9'> “Friends” </span>
                    <span className='text-[#EC99BA] uppercase font-bold leading-9'>“Family”</span>
                    <span className='text-[#53A8CB] uppercase font-bold leading-9'>”Business” </span>  <br />
                    Via Chat & Calls. </p>
                <div className='flex justify-center item-center'>
                <img className='' src={HomeImg} alt="" />
                </div>
                
            </div>
        </div>
    );
};

export default Banner;
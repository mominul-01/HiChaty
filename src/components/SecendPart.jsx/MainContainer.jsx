import React from 'react';
import img1 from '../../assets/Group 40.png'
import img2 from '../../assets/Group 36.png'
import img3 from '../../assets/Group 95.png'

const MainContainer = () => {

    return (
        <div className='container  my-[136px] '>
            <div className='flex'>

            <div className='text-center flex flex-col items-center justify-center mx-10'>
                <img src={img1} alt="" />
                <h1 className='text-[#47525D] text-[24px] font-bold mt-6 mb-3'>Easy To use </h1>
                <p className='text-[16px] font-normal text-center'>Easy to understand all the functions, Connect with Friends and Family direct, No Hidden function.</p>
            </div>

            <div className='border-l-4 border-[#47525D]' ></div>
          
            <div className='text-center flex flex-col items-center justify-center mx-10'>
                <img src={img3} alt="" />
                <h1 className='text-[#47525D] text-[24px] font-bold mt-6 mb-3'>Awesome Design </h1>
                <p className='text-[16px] font-normal text-center'>Grid and List view Design, Multiple color in the UI,.</p>
            </div>

            <div className='border-l-4 border-[#47525D]' ></div>

            <div className='text-center flex flex-col items-center justify-center mx-10'>
                <img src={img2} alt="" />
                <h1 className='text-[#47525D] text-[24px] font-bold mt-6 mb-3'>More Secure </h1>
                <p className='text-[16px] font-normal text-center'>User can connect with Permissions (Chat & Calls), Profile View (Public & Private),</p>
            </div>
            </div>
           



        </div>
    );
};

export default MainContainer;
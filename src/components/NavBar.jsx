import React from 'react';
import logo from '../assets/active_chat.png';

const NavBar = () => {
    return (
        <nav className='flex items-center justify-between'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <a className='mr-6' href="">English</a>
                <a  className='mr-6 text-[#164664] text-[16px] py-3 px-8' href="">Login</a>

                <button className='py-3 px-9 bg-[#53A8CB] rounded-md text-[16px] text-white '>Register</button>
            </div>
        </nav>
    );
};

export default NavBar;
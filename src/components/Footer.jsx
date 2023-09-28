import manageby from '../assets/Group 88.png';
import facebook from '../assets/Facebook.svg';
import instagram from '../assets/Instagram.svg';
import twitter from '../assets/Twitter1.svg';
import youTube from '../assets/Youtube1.svg';
import linkedIN from '../assets/LinkedIn1.svg';

const Footer = () => {
    return (
        <div className='container mt-[53px] flex  justify-between '>
            <div className='m-[20px] '>
                <p>Manage By</p>
                <img src={manageby} alt="" />
            </div>
            <div className='mt-5'>
                <div className='text-[20px] text-[#4A4A4A] font-normal'>
                    <a className='pr-[30px]' href="">About Us</a>
                    <a className='pr-[30px]' href="">Support</a>
                    <a className='pr-[30px]' href="">API</a>
                    <a className='pr-[30px]' href="">Privacy</a>
                    <a className='pr-[30px]' href="">Terms</a>
                </div>
                <div className='mt-3'>
                    <p>© 2020 HiChaty</p>
                </div>
            </div>

            <div className='my-[38px] flex '>
                <a className='pr-[30px]' href=""><img src={facebook} alt="" /></a>
                <a className='pr-[30px]' href=""><img src={instagram} alt="" /></a>
                <a className='pr-[30px]' href=""><img src={twitter} alt="" /></a>
                <a className='pr-[30px]' href=""><img src={youTube} alt="" /></a>
                <a className='pr-[30px]' href=""><img src={linkedIN} alt="" /></a>
            </div>



        </div>
    );
};

export default Footer;
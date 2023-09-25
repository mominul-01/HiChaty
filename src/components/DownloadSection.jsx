
import iphoneDevice from '../assets/iphonedevice.png'
import androidDevice from '../assets/Android Device.png'
import playStore from '../assets/playstore.png'
import appStore from '../assets/appstore.png'


const DownloadSection = () => {
    return (
        <div className='container flex pt-[167px] pb-[168px] '>
            <div className='flex'>
                <img  className='mb-[80px]' src={iphoneDevice} alt="" />
                <img className='mt-[80px]' src={androidDevice} alt="" />
                    
            </div>
            <div className='ml-[90px]'>
                <div className='text-[#4A4A4A] w-[734px]'>
                    <h1 className=' text-[50px] font-normal text-left '>Download App now </h1>
                    <p className='text-[24px] font-normal text-left'>Download HiChaty Messanger on your Device and Stay connected with friends & family</p>
                </div>
                <div className='flex  mt-[25px]'>
                    <img className='mr-[20px]' src={appStore} alt="" />
                    <img src={playStore} alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default DownloadSection;
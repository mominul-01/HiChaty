
import chat from '../../assets/regular_chat.png'
import chatScreen from '../../assets/Chat Screen.png';
import logo from '../../assets/active_chat.png';


const Feature1 = () => {
    return (
        <div className='container flex justify-between'>
            <div className='mt-[120px]'>
                <h1 className='text-[50px] text-[#222425] font-extrabold text-left uppercase'>HiChaty features</h1>
                <div>
                <div className="border-y-4 border-indigo-500 my-5 "></div>
                </div>
                <div className=' my-[40px] '>
                    <img  className=' border-4  border-[#53A8CB] rounded-full  p-[32px] ' src={chat} alt="" />
                </div>
              
                <h2 className='text-[#222425] text-[34px] uppercase font-extrabold text-left'>Chat</h2>
                <p className='text-[#222425] text-[20px] font-bold leading-9 mt-3 w-2/4 text-left'>Here you will be able to see all the registered HiChaty users and their public profile.</p>
                <div className='mt-[20px] flex items-center border-2 border-[#D9D9D9] rounded-[166.667px] w-fit mb-[100px]' >
                  
                    <img className= 'w-10 ml-3' src={logo} alt="" /> 
                    <p className='py-2 px-3'>End-to-end encrypted</p>
                  
                </div>
            </div>
            <div className='mt-[100px]'>
                <img src={chatScreen} alt="" />
            </div>
        </div>
    );
};

export default Feature1;
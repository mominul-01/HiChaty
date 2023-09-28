import logo from '../assets/active_chat.png'
import vector from '../assets/Vector.png';

const Register = () => {
    return (
        <div className='relative bg-gray-200 z-10 rounded-md'>
            <div className='container '>
                <div className='flex flex-col justify-center items-center'>
                    <img src={logo} alt="" />
                        <h4 className='text-[21px] text-[#9B9B9B] font-bold '>Copy
                            Let’s Join HiChaty Messanger </h4>
                        
                    <button className='mt-[40px] py-[11px] px-[54px] bg-[#53A8CB] rounded-md'>Register Hear!
                    </button>
                        
                </div>

            </div>
            
            <div className=' absolute top-0 left-1/2 -translate-x-1/2 -z-10'>
                <img src={vector} alt="" />
            </div>
        </div>
    );
};

export default Register;
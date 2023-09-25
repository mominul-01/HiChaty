import logo from '../assets/active_chat.png'

const Register = () => {
    return (
        <div className='container'>
            <div className='flex flex-col justify-center items-center'>
            <img src={logo} alt="" />
                <h4 className='text-[21px] text-[#9B9B9B] font-bold '>Copy
                    Let’s Join HiChaty Messanger </h4>
                
                <button className='mt-[40px] py-[11px] px-[54px] bg-[#53A8CB] rounded-md'>Register Hear! </button>
                
            </div>
        </div>
    );
};

export default Register;
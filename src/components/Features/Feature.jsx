import { featureData } from "../../Data/dummy"; 

const Feature = ({ data, itemKey, handleClick, active }) => {
    

    // console.log(featureData);
    const { ID, description, heading, logo, image } = data;
    return (
        <div>
                <div className='mt-[120px]'>
                                      
                   

                    <div className="flex gap-2">
                        {featureData.map((item, i) => (
                        //    itemKey === i && 
                                
                            <div key={i} className={`w-8 h-2  rounded ${ itemKey === i ? "bg-red-500" : "bg-blue-500"} `} onClick={() => handleClick(i)}>{itemKey}</div>
                            
                        ))}
                    </div>

                    <div >
                        <div className=' my-[40px] '>
                            <img className=' border-4  border-[#53A8CB] rounded-full  p-[32px] ' src={logo} alt="" />
                        </div>
                        <h2 className='text-[#222425] text-[34px] uppercase font-extrabold text-left'>{heading}</h2>
                        <p className='text-[#222425] text-[20px] font-bold leading-9 mt-3 w-2/4 text-left'>{description}</p>
                        <div className='mt-[20px] flex items-center border-2 border-[#D9D9D9] rounded-[166.667px] w-fit mb-[100px]' >
                            <img className='w-10 ml-3' src={logo} alt="" />
                            <p className='py-2 px-3'>End-to-end encrypted</p>
                        </div>
                   </div>

                </div>

                <div className='mt-[100px]'>
                    <img src={image} alt="" />
                </div>
        </div>
    );
};

export default Feature;
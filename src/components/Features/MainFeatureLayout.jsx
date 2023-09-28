import React, { useEffect, useState } from 'react';

import Feature from './Feature';
import { featureData } from '../../Data/dummy';
import  secure from '../../assets/Stroke 1.svg'



const MainFeatureLayout = () => {

    const [activeTab, setActiveTab] = useState(0);
    // const [featureData] = useState(featureData);


    const changeActiveTab = (data) => {
        setActiveTab(data);
       
    }

    // useEffect(() => {
    //     // Function to automatically change the active tab after 5 seconds
    //     const autoChangeTab = () => {
    //         const timer = setTimeout(() => {
    //             setActiveTab((activeTab + 1) % featureData.length);
    //         }, 5000); // 5000 milliseconds (5 seconds)

    //         return () => clearTimeout(timer);
    //     };

    //     // Call the autoChangeTab function to start the automatic change
    //     autoChangeTab();

    //     // Clean up the timer when the component unmounts
    //     return () => autoChangeTab();
    // }, [activeTab, featureData]);
    

    return (
        <div>
            <div>
                <div className='container flex justify-between'>
                    <div className='mt-[120px]'>
                        <h1 className='text-[50px] text-[#222425] font-extrabold text-left uppercase'>HiChaty features </h1>

                        {/* This is Slider its change 5 sce after automatic */}

                        <div className="flex gap-2">
                            {featureData.map((item, i) => (
                                <div key={i}
                                    className={`w-14 h-3  rounded ${activeTab === i ? "bg-red-500" : "bg-blue-500"} `}
                                    onClick={() => changeActiveTab(i)}>
                                    
                                    </div>
                            ))}
                        </div>


                      

                        {featureData.map((item, i) => (
                        

                            <div key={i} className={`${activeTab === i ? "block" : "hidden"}`}>
                                <div className=' my-[40px] '>
                                    <img className=' border-4  border-[#53A8CB] rounded-full  p-[32px] ' src={item.logo} alt="" />
                                </div>
                                <h2 className='text-[#222425] text-[34px] uppercase font-extrabold text-left'>{item.heading}</h2>
                                <p className='text-[#222425] text-[20px] font-bold leading-9 mt-3 w-2/4 text-left'>{item.description}</p>
                                <div className='mt-[20px] flex items-center border-2 border-[#D9D9D9] rounded-[166.667px] w-fit mb-[100px]' >
                                    <img className='w-10 ml-3' src={secure} alt="" />
                                    <p className='py-2 px-3'>End-to-end encrypted</p>
                                </div>
                            </div>    
                        ))}
                    </div>

                    
                    {/* side image  */}
                    <div  className='mt-[100px] '>
                        {featureData.map((item, i) => (
                            <img key={i} src={item.image} alt=""
                                className={`${activeTab === i ? "block" : "hidden"}`} />
                        ))}
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default MainFeatureLayout;
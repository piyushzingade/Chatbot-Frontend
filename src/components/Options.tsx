import React from 'react';



export default function Options() {
    return (

        <div className="container mx-auto max-w-[720px] px-4 md:px-0 justify-center items-center mt-12">
            <div className='flex '>
                <div className="flex">
                    <img className="w-[24px] h-[24px]" src="./public/img.svg" alt="" />
                    <p className='px-2' >Get Started</p>
                </div>
            </div>

            <div className="container mx-auto max-w-[720px] gap-x-[16px] px-4 md:px-0 flex justify-center items-center mt-6">
                <div className="w-[168px]  h-[100px] p-4 rounded-lg bg-white">
                    <div className='w-[136px] h-[68px]'>
                        <img className="w-[24px] h-[24px]" src="./public/image1.png" alt="image1" />
                        <p className='font-semibold text-xs mt-3'>Course Resgrisation Help</p>
                    </div>
                </div>
                <div className=" w-[168px]  h-[100px] p-4 rounded-lg bg-white">
                    <div className="w-[136px] h-[68px]">
                        <img className="w-[24px] h-[24px]" src="./public/image2.png" alt="image2" />
                        <p className='font-semibold text-xs mt-3' >Internship Opportunities</p>
                    </div>
                </div>
                <div className=" w-[168px]  h-[100px] p-4 rounded-lg bg-white">
                    <div className="w-[136px] h-[68px]">
                        <img className="w-[24px] h-[24px]" src="./public/image3.png" alt="image3" />
                        <p className='font-semibold text-xs mt-3'>Library Resources</p>
                    </div>
                </div>
                <div className=" w-[168px]  h-[100px] p-4 rounded-lg bg-white">
                    <div className="w-[136px] h-[68px]">
                        <img className="w-[24px] h-[24px]" src="./public/image4.png" alt="image4" />
                        <p className='font-semibold text-xs mt-3'>Graduation Requirement </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
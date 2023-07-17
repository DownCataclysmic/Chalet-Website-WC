import React from 'react';

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
    return (
        <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
            {/*Overlay*/}
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]'/>
            <div className='p-5 text-white z-[2] ml-[-10rem] mt-[-10rem]'>
                <h2 className='text-5xl font-bold'>Castleman Retreats</h2>
                <p className='py-5 text-xl'>Message</p>
                <button className='px-8 py-2 border'>Book</button>
            </div>
        </div>
    );
};

export default Hero;
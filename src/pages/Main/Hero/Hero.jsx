import React from 'react';
import { Link } from 'react-router';
import TwoButton from '../../../utils/Button/TwoButton';
import Slider from '../../../utils/Slider/Slider';

const Hero = () => {
    return (
        <div className='flex flex-col gap-4 py-5 px-4 lg:px-0'>
            {/* Hero Title */}
            <h2 className='text-4xl sm:text-5xl lg:text-7xl font-medium leading-tight'>
                Fast <span className='text-[#3381e7]'>Web <br className="lg:block" /> & Smart</span> Solutions <span className='text-[#3381e7]'>✦</span>
            </h2>

            {/* Hero Description + Button */}
            <section className='flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4'>
                <p className='text-lg sm:text-xl lg:text-2xl flex-5/8 leading-relaxed'>
                    Crafting fast, scalable, and reliable web solutions, from media sites <br className='hidden lg:block' /> and eCommerce stores to custom web applications.
                </p>

                <Link to={"/pricing"} className='flex-1'>
                    <TwoButton className="w-full sm:w-auto h-auto" text={"Get In Touch"} />
                </Link>
            </section>
            <div className='lg:pt-6 pt-3 opacity-25 text-[#3381e7]'><hr /></div>
            {/* <hr className='lg:pt-6' /> */}
            <div><Slider></Slider></div>
        </div>
    );
};

export default Hero;
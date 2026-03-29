import React from 'react';
import { Link } from 'react-router';
import TwoButton from '../../../utils/Button/TwoButton';
// import Slider from '../../../utils/Slider/Slider';
import SliderBar from '../../../utils/Slider/Slider';

const Hero = () => {
    return (
        <div className='flex flex-col lg:gap-4 pt-20 px-4'>
            {/* Hero Title */}
            <h2 className='text-4xl sm:text-5xl lg:text-8xl font-medium pb-5'>
                Fast <span className='text-[#3381e7]'>Web <br className="lg:block" /> & Smart</span> Solutions <span className='text-[#3381e7]'>✦</span>
            </h2>

            {/* Hero Description + Button */}
            <section className='flex flex-col pb-5 lg:flex-row justify-between items-start lg:items-end gap-4'>
                <p className='text-lg sm:text-xl lg:text-2xl flex-5/8 leading-relaxed'>
                    Crafting fast, scalable, and reliable web solutions, from media sites <br className='hidden lg:block' /> and eCommerce stores to custom web applications.
                </p>

                <Link to={"/pricing"} className='flex-1'>
                    <TwoButton className="w-full sm:w-auto h-auto" text={"Get In Touch"} />
                </Link>
            </section>
            {/* <hr className='lg:pt-6' /> */}
        </div>
    );
};

export default Hero;
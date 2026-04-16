import React from 'react';
import Hero from './Hero/Hero';
import SliderBar from '../../utils/Slider/Slider';
import Stack from '../../components/Stack/Stack';
import Services from './Services/Services';
import Review from './Review/Review';

const Main = () => {
    return (
        <div className='lg:py-10 py-5'>
            <Hero></Hero>
            <div className='lg:pt-10 lg:mt-0 mt-16 pb-5 opacity-25 text-[#3381e7]'><hr /></div>
            <div className='-mt-4'> <Services></Services> </div>
            <div className='-mt-4'><Stack></Stack></div>
            <SliderBar></SliderBar> 
            <div className='mt-4'><Review></Review></div>
        </div>
    );
};

export default Main;
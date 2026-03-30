import React from 'react';
import Hero from './Hero/Hero';
import SliderBar from '../../utils/Slider/Slider';
import Stack from '../../components/Stack/Stack';

const Main = () => {
    return (
        <div className='lg:py-10 py-5'>
            <Hero></Hero>
            <div className='lg:pt-10 lg:mt-0 mt-16 pb-5 opacity-25 text-[#3381e7]'><hr /></div>
            <Stack></Stack>
            <SliderBar></SliderBar> 
        </div>
    );
};

export default Main;
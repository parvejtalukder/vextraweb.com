import React from "react";
import Hero from "./Hero/Hero";
import Stack from '../../components/Stack/Stack';
import Services from './Services/Services';
import WhyChoose from '../../components/WhyChoose/WhyChoose';
import SliderBar from '../../utils/Slider/Slider';
import Review from './Review/Review';
import CTABanner from '../../components/CTABanner/CTABanner';
import ButtonCTA from '@/components/ButtonCTA';

const Main = () => {
    return (
        <div>
            {/* Hero */}
            <Hero></Hero>

            {/* Tech Stack Marquee */}
            <Stack></Stack>

            {/* Core Services */}
            <Services></Services>

            {/* Why Choose VextraWeb */}
            <WhyChoose></WhyChoose>

            {/* Portfolio / Recent Projects */}
            <SliderBar></SliderBar>

            {/* Testimonials */}
            <Review></Review>

            {/* CTA Banner */}
            <CTABanner></CTABanner>

            <ButtonCTA></ButtonCTA>
        </div>
    );
};

export default Main;
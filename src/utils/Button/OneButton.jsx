import React from 'react';
import Arrow from '../../assets/arrow.svg'

const OneButton = ({text}) => {
    return (
        <div className='group inline-flex h-[46px] cursor-pointer items-center gap-2 rounded-full border-2 border-white/40 bg-transparent px-6 text-white transition-all duration-300 hover:border-[#3391e7] hover:bg-[#3391e7]/10 hover:shadow-[0_0_30px_-8px_rgba(51,145,231,0.8)]'>
            <span className='text-sm font-semibold whitespace-nowrap'>{text}</span>
            <img
                className='size-4 rotate-180 transition-transform duration-300 group-hover:translate-x-0.5'
                src={Arrow}
                alt={text}
            />
        </div>
    );
};

export default OneButton;
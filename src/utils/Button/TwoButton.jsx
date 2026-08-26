import React from 'react';
import Arrow from '../../assets/arrow.svg'

const TwoButton = ({text, className = ''}) => {
    return (
        <div className={`group inline-flex h-[46px] cursor-pointer items-center gap-2 rounded-full btn-gradient px-6 text-white transition-all duration-300 ${className}`}>
          <span className='text-sm font-semibold whitespace-nowrap'>{text}</span>
          <img className='size-4 rotate-180 transition-transform duration-300 group-hover:translate-x-0.5' src={Arrow} alt={text} />
        </div>
    );
};

export default TwoButton;
import React from 'react';
import Arrow from '../../assets/arrow.svg'

const TwoButton = ({text}) => {
    return (
        <div className='group bg-[#004AAD] px-5 py-2 max-w-44 flex justify-center items-center rounded-4xl border-2 border-[#004AAD] cursor-pointer transition-all hover:bg-transparent'>
          <p className='flex gap-1 items-center text-md'> {text} <img className='transition-transform duration-300 rotate-145 group-hover:rotate-180 text-[#004AAD]' src={Arrow} alt={text} /> </p>
        </div>  
    );
};

export default TwoButton;
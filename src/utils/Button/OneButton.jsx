import React from 'react';
import Arrow from '../../assets/arrow.svg'

const OneButton = ({text}) => {
    return (
        <div className='group bg-transparent duration-1000 max-w-44 flex justify-center items-center px-5 py-2 rounded-4xl border-1 border-white cursor-pointer'>
          <p className='flex gap-1 items-center text-md'> {text} <img className='transition-transform duration-300 rotate-145 group-hover:rotate-180' src={Arrow} alt={text} /> </p>
        </div>
    );
};

export default OneButton;
import React from 'react';
import image from '../../../../assets/menu/banner3.jpg';
import { Parallax } from 'react-parallax';



const CoverBlur = () => {

    return (
        <Parallax
         blur={{ min: -50, max: 50 }} bgImage={image} bgImageAlt="menu" strength={-200}>
        <div className="hero h-[600px] mb-1">
  <div className="hero-overlay bg-opacity-5"></div>
  <div className='bg ml-28 mr-28 mt-40 py-14 px-20'>
          <h1 className='text-7xl font-bold font-serif text-white text-center mb-4'>OUR MENU</h1>
          <p className='text-center text-white font text-2xl'>WOULD YOU LIKE TO TRY A DISH?</p>
        </div>
      </div>
      
      </Parallax>
    );
};

export default CoverBlur;
import React, { useEffect, useState } from 'react';
import './services.css';
import flutter from './imgs/flutter.png';
import html from './imgs/html.png';

import python from './imgs/python.png';
import react from './imgs/react.png';
import solidity from './imgs/solidity.png';
import figma from './imgs/figma.png'


const Services = () => {
    const [isVisible, setVisible] = useState(false);
    const domRef = React.useRef();
  
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => setVisible(entry.isIntersecting));
      });
  
      observer.observe(domRef.current);
  
      // Cleanup the observer on component unmount
      return () => observer.disconnect();
    }, []);
  return (
    <section className='flex flex-col h-full  w-full justify-start bg-black'>
        <div
          className={`projects-main fade-in-section ${
            isVisible ? "is-visible" : ""
          }`}
          ref={domRef}
        >
            <p className='text-8xl mt-20 '>The Things I Know So Far</p>
      <div className="flex flex-wrap mt-8 mb-20">
        <div className="w-full md:w-1/3 px-2 border">
          <div className="p-4 flex flex-col justify-center items-center">
            <img src={html} alt="" className='h-200 w-200' />
            <div className='text-white'>HTML-CSS-JS</div>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-2 border">
          <div className="p-4 flex flex-col justify-center items-center">
 <img src={solidity} alt="" className='w-3/5'/>
            <div className='text-white'>Soldity</div>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-2 border">
          <div className="p-4 flex flex-col justify-center items-center">
          <img src={python} alt=""className='w-3/5' />
            <div className='text-white'>Python</div>
          </div>
        </div>
        <div className="w-full border md:w-1/3 px-2 ">
          <div className="p-4 flex flex-col justify-center items-center">
          <img src={react} alt="" className='w-3/5'/>
            <div className='text-white'>ReactJS</div>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-2  border" >
          <div className="p-4 flex flex-col justify-center items-center">
          <img src={figma} alt=""className='w-3/5' />
            <div className='text-white'>Figma</div>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-2  border">
          <div className="p-4 flex flex-col justify-center items-center">    
          <img src={flutter} alt="" className='w-3/5'/>
            <div className='text-white'>Flutter</div>
          </div>
        </div>
      </div>
        </div>
      
    </section>
  );
};

export default Services;

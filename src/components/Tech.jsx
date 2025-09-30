import React from "react";

// Assuming these are correctly imported from your project files
import { BallCanvas } from "./canvas"; 
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants"; 

const Tech = () => {
  // Define the text content for the heading and description
  const subheading = "My Skillset";
  const heading = "Technologies";
  const description = "I have experience working with the following technologies, tools, and libraries to build modern, efficient, and responsive web applications.";

  return (
    // The main container stacks everything vertically (flex-col) and centers it
    <div className='flex flex-col items-center'> 
      
      {/* --- UPPER SIDE: Heading and Subheading --- */}
      {/* Subheading */}
      <p className='text-sm text-secondary uppercase tracking-wider mb-2'>
        {subheading}
      </p>
      
      {/* Main Heading */}
      <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mb-10'>
        {heading}
      </h2>

      {/* --- MIDDLE: Icons Section with Names Below --- */}
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          // **Container for one technology (Icon + Name) - STACKS VERTICALLY**
          <div 
            className='w-28 h-36 flex flex-col items-center justify-start' 
            key={technology.name}
          >
            {/* 1. Icon (BallCanvas) container - maintains 3D element size */}
            <div className='w-28 h-28'>
              <BallCanvas icon={technology.icon} />
            </div>

            {/* 2. Name below the icon */}
            <p className='text-white text-sm mt-2 text-center'>
              {technology.name}
            </p>
          </div>
        ))}
      </div>

      {/* --- BELOW ICONS: Description --- */}
      <div className='mt-10 max-w-3xl text-center'>
        <p className='text-base text-gray-400 leading-relaxed'>
          {description}
        </p>
      </div>

    </div>
  );
};

// Wraps the component with higher-order component for section styling/ID
export default SectionWrapper(Tech, "");
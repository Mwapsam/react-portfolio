import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => (
  <div name="home" className="w-full h-screen bg-[#0a192f]">
    <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
      <p className="text-indigo-400">Hi, my name is</p>
      <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
        Mwape,
      </h1>
      <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] pt-2">
        Glad to see you!
      </h2>
      <p className="text-[#8892b0] py-4 max-w-[700px]">
        I am a full stack software developer! I can help you build a product,
        feature or website Look through some of my work and experience!
        If you like what you see and have a project you need coded,
        don&apos;t hestiate to contact me.
      </p>
      <div>
        <button type="button" className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-indigo-600 hover:border-indigo-600">
          View Work
          <span className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight className="ml-3" />
          </span>
        </button>
      </div>
    </div>
  </div>
);

export default Home;

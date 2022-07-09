import React from 'react';

const About = () => (
  <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
        <div className="sm:text-right pb-8 pl-4">
          <p className="text-4xl font-bold inline border-b-4 border-indigo-600">
            About
          </p>
        </div>
        <div />
      </div>
      <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
        <div className="sm:text-right text-4xl font-bold">
          <p>Hi. I&apos;m Mwape, nice to meet you. Please take a look around.</p>
        </div>
        <div>
          <p>
            My passion for software lies with dreaming up ideas and making
            them come true with elegant interfaces.
            I take great care in the experience, architecture,
            and code quality of the things I build. I specialize in creating software
            for clients ranging from individuals and small-businesses all the
            way to large enterprise corporations. What would you do if you had
            a software specialist available at your fingertips?
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;

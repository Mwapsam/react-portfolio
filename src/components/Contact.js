import React from 'react';

const Contact = () => (
  <div name="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
    <form method="POST" action="https://getform.io/f/70f907f8-d849-4e25-a35d-5df24a1dabc9" className="flex flex-col max-w-[600px] w-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-blue-600 text-gray-300">Contact</p>
        <p className="text-gray-300 py-4">Hello, I am a software developer! I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don&apos;t hestiate to contact me.</p>
      </div>
      <input className="bg-[#ccd6f6] p-2 rounded-lg" type="text" placeholder="Name" name="name" />
      <input className="my-4 p-2 bg-[#ccd6f6] rounded-lg" type="email" placeholder="Email" name="email" />
      <textarea className="bg-[#ccd6f6] p-2 rounded-lg" name="message" rows="10" placeholder="Message" />
      <button type="button" className="text-white border-2 hover:bg-blue-600 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center">Let&apos;s Collaborate</button>
    </form>
  </div>
);

export default Contact;

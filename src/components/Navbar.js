/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaAngellist,
  FaTwitter,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import Logo from '../assets/logo.png';

function Mailto({
  email, subject, body, ...props
}) {
  return (
    <a className="flex justify-between items-center w-full text-gray-300" href={`mailto:${email}?subject=${subject || ''}&body=${body || ''}`}>
      {props.children}
    </a>
  );
}

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo" style={{ width: '50px' }} />
      </div>
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10" aria-hidden="true">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {' '}
          <Link onClick={handleClick} to="about" smooth duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-indigo-900">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/mwapsam/"
            >
              Linkedin
              {' '}
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Mwapsam"
            >
              Github
              {' '}
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-indigo-900">
            <Mailto
              email="dev@mwape.ml"
              subject="Let's connect"
              body="Leave a message!"
            >
              Email
              {' '}
              <HiOutlineMail size={30} />
            </Mailto>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#9a9a9a]">
            <a
              className="flex justify-between items-center w-full text-indigo-800"
              target="_blank"
              rel="noreferrer"
              href="https://docs.google.com/document/d/16vzatYUPWMctWrhJw4ZBZ0GeDIFA0pjfVKYvzN-uLn8/edit?usp=sharing"
            >
              Resume
              {' '}
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-white">
            <a
              className="flex justify-between items-center w-full text-blue-600"
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/mwapesamuel4"
            >
              Twitter
              {' '}
              <FaTwitter size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              rel="noreferrer"
              href="https://angel.co/u/samuel-chimfwembe"
            >
              Angelist
              {' '}
              <FaAngellist size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

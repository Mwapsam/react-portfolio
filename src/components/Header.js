import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import { IoLogoTwitter } from 'react-icons/io';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithub, FaAngellist } from 'react-icons/fa';
import { RiMediumLine } from 'react-icons/ri';
import profile from '../assets/images/mwape.jpg';
import Projects from './Projects';

const navigation = [
  { name: 'Projects', href: '/projects' },
  { name: 'Skills', href: '/' },
  { name: 'Contact', href: '/' },
  { name: 'About', href: '/' },
];

const Header = () => (
  <>
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <Link to="/">
                      <span className="sr-only">Workflow</span>
                      <img
                        alt="Workflow"
                        className="h-8 w-auto sm:h-10"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      />
                    </Link>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button
                        className="
                        bg-white
                        rounded-md
                        p-2 inline-flex
                         items-center
                         justify-center
                         text-gray-400
                         hover:text-gray-500
                         hover:bg-gray-100
                         focus:outline-none
                         focus:ring-2
                         focus:ring-inset
                         focus:ring-indigo-500"
                      >
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  {navigation.map((item) => (
                    <Link key={item.name} to={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="
                      bg-white
                      rounded-md p-2
                      inline-flex
                      items-center
                      justify-center
                      text-gray-400
                      hover:text-gray-500
                      hover:bg-gray-100
                      focus:outline-none
                      focus:ring-2
                      focus:ring-inset
                      focus:ring-indigo-500"
                      >
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <Link
                    to="/"
                    className="
                    block w-full
                    px-5 py-3
                    text-center
                    font-medium
                    text-indigo-600
                    bg-gray-50
                    hover:bg-gray-100"
                  >
                    Log in
                  </Link>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">I&apos;m Mwape,</span>
                <br />
                <span className="block text-indigo-600 xl:inline">glad to see you!</span>
              </h1>
              <p className="
              mt-3 text-base
              text-gray-500
              sm:mt-5 sm:text-lg
              sm:max-w-xl sm:mx-auto
              md:mt-5 md:text-xl lg:mx-0"
              >
                I’m a software developer! I can help you build a product,
                feature or website Look through some of my work and experience!
                If you like what you see and have a project you need coded,
                don’t hestiate to contact me.
              </p>
              <div className="mt-5 sm:mt-8 flex lg:justify-start">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/mwapesamuel4"
                >
                  <IoLogoTwitter className="text-2xl text-blue-600 m-2" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/mwapsam/"
                >
                  <AiFillLinkedin className="text-2xl text-blue-600 m-2" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Mwapsam"
                >
                  <FaGithub className="text-2xl text-black m-2" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://angel.co/u/samuel-chimfwembe"
                >
                  <FaAngellist className="text-2xl text-black m-2" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://medium.com/@mwapsam"
                >
                  <RiMediumLine className="text-2xl text-black m-2" />
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={profile}
          alt=""
        />
      </div>
    </div>
    <Projects />
  </>
);

export default Header;

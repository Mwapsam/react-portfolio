/* eslint-disable react/no-array-index-key */
import { Link } from 'react-router-dom';
import projects from '../data/projects';

const Projects = () => (
  <div className="bg-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
        <h2 className="text-2xl font-extrabold text-gray-900">Projects</h2>

        <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
          {projects.map((callout) => (
            <div key={callout.name} className="group relative mb-9">
              <h3 className="mb-6 mt-6 text-sm text-gray-300">
                <Link to={callout.href}>
                  <span className="absolute inset-0" />
                  {callout.name}
                </Link>
              </h3>
              <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img
                  src={callout.imageSrc}
                  alt={callout.imageAlt}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              {callout.techStack.map((tech, index) => <button type="button" key={index} className="mt-6 bg-gray-300 m-1 px-2 py-1 text-indigo-600 text-sm rounded">{tech}</button>)}
              <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              <button type="button" className="relative w-full flex items-center justify-center mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                See project
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Projects;

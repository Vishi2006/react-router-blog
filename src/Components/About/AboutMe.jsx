import React from 'react';
import logoImage from '../../assets/image.png';

export default function AboutMe() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
        <div className="flex justify-center mb-6">
          <img
            src={logoImage}
            alt="Pulkit Khowal"
            className="w-32 h-32 rounded-full border-4 border-green-400 shadow-lg"
          />
        </div>
        <h3 className="text-2xl font-semibold text-green-600 mb-2">Pulkit Khowal</h3>
        <p className="text-lg text-gray-600 mb-4">Frontend Developer</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Personal Information */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
            Personal Information
          </h4>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="text-green-500 font-medium">Name:</span>
              <span className="text-gray-700">Pulkit Khowal</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-green-500 font-medium">Role:</span>
              <span className="text-gray-700">Website Developer</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-green-500 font-medium">Location:</span>
              <span className="text-gray-700">Jaipur, India</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-green-500 font-medium">Hobby:</span>
              <span className="text-gray-700">Fitness/Dance</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-green-500 font-medium">Tech Intrest:</span>
              <span className="text-gray-700">3D web animations</span>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
            Technical Skills
          </h4>
          <div className="space-y-3">
            <div>
              <span className="text-green-500 font-medium">Programming Languages:</span>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">C/C++</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">JavaScript</span>
              </div>
            </div>
            <div>
              <span className="text-green-500 font-medium">Frontend Technologies:</span>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm">React.js</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">React Router</span>
                <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">Tailwind CSS</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Bootstrap</span>
              </div>
            </div>
            <div>
              <span className="text-green-500 font-medium">Tools & Technologies:</span>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Git</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">GitHub</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">SQL</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Vite</span>
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">VS Code</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Me Text */}
      <div className="space-y-4">
        <h4 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
          About Me
        </h4>
        <div className="text-gray-700 leading-relaxed space-y-4">
          <p>
            Hello! I'm Pulkit Khowal, a passionate Frontend Developer with a strong foundation in frontend and programming technologies. 
            I love creating modern, responsive web applications that provide excellent user experiences.
          </p>
          <p>
            My journey in web development started with a curiosity to build things that people can use and enjoy. I made projects in python and JavaScript and sloving DSA in C++, now currently i'm exploring React.js.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
            or sharing my knowledge with the developer community. I believe in continuous learning and staying 
            up-to-date with the latest industry trends.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">Get In Touch</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
            <span className="text-gray-700">pulkitkhowal2006@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
            </svg>
            <span className="text-gray-700">Jaipur, Rajasthan , India</span>
          </div>
        </div>
      </div>
    </div>
  );
}

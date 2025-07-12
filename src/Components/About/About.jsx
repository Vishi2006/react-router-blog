import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';

export default function About() {
  const location = useLocation();
  const isDefaultRoute = location.pathname === '/about';

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">About</h1>
          <p className="text-lg text-gray-600">This main concept of this page is Nested routing.</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <nav className="flex space-x-1 bg-white rounded-lg shadow-md p-1">
            <NavLink
              to="/about/aboutMe"
              className={({ isActive }) =>
                `px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'bg-green-500 text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`
              }
            >
              About Me
            </NavLink>
            <NavLink
              to="/about/aboutProject"
              className={({ isActive }) =>
                `px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'bg-green-500 text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`
              }
            >
              About Project
            </NavLink>
          </nav>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-lg shadow-md p-6">
          {isDefaultRoute ? (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Nested Routing!</h2>
                <p className="text-gray-600">This page demonstrates the power of React Router's nested routing concept.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">What is Nested Routing?</h3>
                  <p className="text-blue-800 mb-4">
                    Nested routing allows you to create routes within routes, creating a hierarchical navigation structure. 
                    In this About section, we have a parent route (/about) with two child routes (/about/aboutMe and /about/aboutProject).
                  </p>
                  <ul className="text-blue-800 space-y-2 text-sm">
                    <li>• Parent route renders the layout and navigation</li>
                    <li>• Child routes render specific content</li>
                    <li>• <code className="bg-blue-200 px-1 rounded">Outlet</code> component displays child content</li>
                    <li>• Navigation stays active while content changes</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-900 mb-3">How It Works</h3>
                  <p className="text-green-800 mb-4">
                    The nested routing structure creates a seamless user experience where the navigation remains consistent 
                    while the content area dynamically updates based on the selected route.
                  </p>
                  <ul className="text-green-800 space-y-2 text-sm">
                    <li>• Click "About Me" to see personal information</li>
                    <li>• Click "About Project" to see project details</li>
                    <li>• Notice how the URL changes but layout stays</li>
                    <li>• Active tab is highlighted automatically</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Implementation</h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-gray-100 p-3 rounded">
                    <p className="font-medium text-gray-800 mb-1">Route Structure:</p>
                    <code className="text-gray-700">
                      /about (parent) → /about/aboutMe (child)<br/>
                      /about (parent) → /about/aboutProject (child)
                    </code>
                  </div>
                  <div className="bg-gray-100 p-3 rounded">
                    <p className="font-medium text-gray-800 mb-1">Key Components:</p>
                    <code className="text-gray-700">
                      &lt;Outlet /&gt; - Renders child route content<br/>
                      &lt;NavLink&gt; - Active state navigation<br/>
                      useLocation() - Track current route
                    </code>
                  </div>
                </div>
              </div>

              <div className="text-center pt-4">
                <p className="text-gray-600 mb-4">Ready to explore? Click on the tabs above to see nested routing in action!</p>
                <div className="flex justify-center space-x-4">
                  <NavLink
                    to="/about/aboutMe"
                    className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors duration-200"
                  >
                    About Me
                  </NavLink>
                  <NavLink
                    to="/about/aboutProject"
                    className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors duration-200"
                  >
                    About Project
                  </NavLink>
                </div>
              </div>
            </div>
          ) : (
            <Outlet />
          )}
        </div>
      </div>
    </div>
  );
}

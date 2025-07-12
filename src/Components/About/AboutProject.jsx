import React from 'react';

export default function AboutProject() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">About This Project</h2>
        <p className="text-lg text-gray-600 mb-6">
          A modern React Router blog showcasing advanced routing concepts and responsive design
        </p>
      </div>

      {/* Project Overview */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Project Overview</h3>
        <p className="text-gray-700 leading-relaxed">
          This React Router blog is a comprehensive demonstration of modern web development practices, 
          featuring advanced routing concepts, responsive design, and professional UI/UX implementation. 
          It serves as both a learning resource and a portfolio piece showcasing React Router capabilities.
        </p>
      </div>

      {/* Key Features */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
          Key Features
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-green-400">
              <h4 className="font-semibold text-gray-800 mb-2">🚀 Advanced Routing</h4>
              <p className="text-gray-600 text-sm">
                Nested routes, dynamic routing, and lazy loading for optimal performance
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-blue-400">
              <h4 className="font-semibold text-gray-800 mb-2">📱 Responsive Design</h4>
              <p className="text-gray-600 text-sm">
                Mobile-first approach with Tailwind CSS for seamless experience across all devices
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-purple-400">
              <h4 className="font-semibold text-gray-800 mb-2">🎨 Modern UI/UX</h4>
              <p className="text-gray-600 text-sm">
                Clean, professional design with smooth animations and intuitive navigation
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-yellow-400">
              <h4 className="font-semibold text-gray-800 mb-2">⚡ Performance Optimized</h4>
              <p className="text-gray-600 text-sm">
                Code splitting, lazy loading, and optimized bundle size for fast loading
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-red-400">
              <h4 className="font-semibold text-gray-800 mb-2">🔧 Developer Experience</h4>
              <p className="text-gray-600 text-sm">
                Clean code structure, proper error handling, and comprehensive documentation
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-indigo-400">
              <h4 className="font-semibold text-gray-800 mb-2">🌐 SEO Friendly</h4>
              <p className="text-gray-600 text-sm">
                Proper meta tags, semantic HTML, and accessible design patterns
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
          Technology Stack
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-4 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-3 text-center">Frontend</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">React.js</span>
                <span className="text-green-500 font-medium">18.x</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">React Router</span>
                <span className="text-green-500 font-medium">6.x</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Tailwind CSS</span>
                <span className="text-green-500 font-medium">3.x</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Vite</span>
                <span className="text-green-500 font-medium">5.x</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Cursor</span>
                <span className="text-green-500 font-medium">✓</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-3 text-center">Development</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">JavaScript</span>
                <span className="text-green-500 font-medium">ES6+</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">JSX</span>
                <span className="text-green-500 font-medium">✓</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">ESLint</span>
                <span className="text-green-500 font-medium">✓</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Git</span>
                <span className="text-green-500 font-medium">✓</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-3 text-center">Features</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Responsive</span>
                <span className="text-green-500 font-medium">✓</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Lazy Loading</span>
                <span className="text-green-500 font-medium">✓</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Dynamic Routes</span>
                <span className="text-green-500 font-medium">✓</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Error Handling</span>
                <span className="text-green-500 font-medium">✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Structure */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
          Project Structure
        </h3>
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="font-mono text-sm space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-blue-600">📁</span>
              <span className="text-gray-800 font-semibold">ReactRouter/</span>
            </div>
            <div className="ml-4 space-y-1">
              <div className="flex items-center space-x-2">
                <span className="text-green-600">📄</span>
                <span className="text-gray-700">package.json</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">📄</span>
                <span className="text-gray-700">vite.config.js</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">📄</span>
                <span className="text-gray-700">index.html</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-blue-600">📁</span>
                <span className="text-gray-800 font-semibold">src/</span>
              </div>
              <div className="ml-4 space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">📄</span>
                  <span className="text-gray-700">main.jsx</span>
                  <span className="text-gray-500 text-xs">(Router Configuration)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">📄</span>
                  <span className="text-gray-700">App.jsx</span>
                  <span className="text-gray-500 text-xs">(Root Component)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">📄</span>
                  <span className="text-gray-700">index.css</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">📁</span>
                  <span className="text-gray-800 font-semibold">Components/</span>
                </div>
                <div className="ml-4 space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-600">📁</span>
                    <span className="text-gray-700">Home/</span>
                    <span className="text-gray-500 text-xs">(Home.jsx)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-600">📁</span>
                    <span className="text-gray-700">About/</span>
                    <span className="text-gray-500 text-xs">(About.jsx, AboutMe.jsx, AboutProject.jsx)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-600">📁</span>
                    <span className="text-gray-700">Header/</span>
                    <span className="text-gray-500 text-xs">(Header.jsx)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-600">📁</span>
                    <span className="text-gray-700">Footer/</span>
                    <span className="text-gray-500 text-xs">(Footer.jsx)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-600">📁</span>
                    <span className="text-gray-700">Contact/</span>
                    <span className="text-gray-500 text-xs">(Contact.jsx)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-600">📁</span>
                    <span className="text-gray-700">LazyLoad/</span>
                    <span className="text-gray-500 text-xs">(LazyLoad.jsx)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-600">📁</span>
                    <span className="text-gray-700">DynamicRoutes/</span>
                    <span className="text-gray-500 text-xs">(DynamicRoutes.jsx)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-600">📁</span>
                    <span className="text-gray-700">NotFound/</span>
                    <span className="text-gray-500 text-xs">(Notfound.jsx)</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">📁</span>
                  <span className="text-gray-700">assets/</span>
                  <span className="text-gray-500 text-xs">(Images & Icons)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-50 rounded-lg p-4">
          <h4 className="font-semibold text-blue-900 mb-2">📋 Structure Highlights:</h4>
          <ul className="text-blue-800 text-sm space-y-1">
            <li>• <strong>Component-based architecture</strong> with organized folder structure</li>
            <li>• <strong>Nested routing</strong> in About section (About.jsx → AboutMe.jsx/AboutProject.jsx)</li>
            <li>• <strong>Lazy loading</strong> for performance optimization</li>
            <li>• <strong>Dynamic routes</strong> for flexible content rendering</li>
            <li>• <strong>Error handling</strong> with dedicated NotFound component</li>
          </ul>
        </div>
      </div>

      {/* Learning Objectives */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
          Learning Objectives
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>React Router v6 implementation</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>Nested routing concepts</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>Dynamic route parameters</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>Lazy loading components</span>
            </li>
          </ul>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>Responsive design patterns</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>Modern CSS with Tailwind</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>Error boundary implementation</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>Professional UI/UX design</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

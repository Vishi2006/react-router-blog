import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-4xl md:text-3xl font-bold text-gray-900 mb-6">
             Welcome to React Router Learning Blog
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A simple guide to understand React Router concepts with clear explanations.
            </p>
          </div>
        </div>
      </section>

      {/* React Router Explanation */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What is React Router?
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              React Router is a powerful library that enables navigation and routing in React applications. 
              It allows you to create single-page applications (SPAs) with multiple views and URLs, 
              making your app feel like a traditional multi-page website.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Do We Use React Router?</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Create navigation between different pages/views</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Enable browser back/forward buttons</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Allow users to bookmark specific pages</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Share direct links to specific content</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Improve SEO with proper URLs</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Does React Have Built-in Routing?</h3>
              <p className="text-gray-700 mb-4">
                <strong>No, React doesn't have built-in routing.</strong> React is a UI library that focuses on 
                building user interfaces, but it doesn't include routing functionality.
              </p>
              <p className="text-gray-700">
                That's why we need React Router - it's a third-party library specifically designed to handle 
                navigation and routing in React applications. It's the most popular and widely-used routing 
                solution for React.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Major Concepts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Major Concepts of React Router
            </h2>
            <p className="text-lg text-gray-600">
              Understanding these core concepts will help you master React Router
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Routes & Route</h3>
              <p className="text-gray-600 text-sm">
                Routes define the mapping between URLs and components. Each Route represents a page or view in your application.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Navigation</h3>
              <p className="text-gray-600 text-sm">
                Link and NavLink components allow users to navigate between different routes without page reloads.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Dynamic Routes</h3>
              <p className="text-gray-600 text-sm">
                Routes with parameters (like /user/:id) that can display different content based on URL values.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Nested Routes</h3>
              <p className="text-gray-600 text-sm">
                Routes within routes that create parent-child relationships and complex navigation structures.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Lazy Loading</h3>
              <p className="text-gray-600 text-sm">
                Loading components only when needed, improving initial page load performance.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Error Boundaries</h3>
              <p className="text-gray-600 text-sm">
                Handling navigation errors and showing fallback UI when routes fail to load.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How React Router Improves Performance
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Single Page Application (SPA)</h3>
              <p className="text-gray-700 mb-4">
                React Router enables SPAs where only the necessary parts of the page are updated, 
                not the entire page. This results in:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Faster page transitions</li>
                <li>• Reduced server requests</li>
                <li>• Better user experience</li>
                <li>• Lower bandwidth usage</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Code Splitting & Lazy Loading</h3>
              <p className="text-gray-700 mb-4">
                React Router works perfectly with code splitting, allowing you to:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Load only required components</li>
                <li>• Reduce initial bundle size</li>
                <li>• Improve loading times</li>
                <li>• Better resource management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tips for Developers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              This blog is a React Router explanation blog. Here i explain, what i learned and how i build, and how each concept works 
              through clear explanations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Always Use Exact Paths</h3>
              <p className="text-blue-700 text-sm">
                Use exact paths in your routes to avoid conflicts. This prevents multiple routes from matching the same URL.
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Implement Error Boundaries</h3>
              <p className="text-green-700 text-sm">
                Always wrap your routes with error boundaries to handle navigation errors gracefully and provide better UX.
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Use Lazy Loading</h3>
              <p className="text-purple-700 text-sm">
                Implement lazy loading for your routes to improve initial page load performance and reduce bundle size.
              </p>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">Plan Your Route Structure</h3>
              <p className="text-yellow-700 text-sm">
                Think about your route structure before implementing. Plan for nested routes and dynamic parameters.
              </p>
            </div>

            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-3">Handle Loading States</h3>
              <p className="text-red-700 text-sm">
                Always provide loading states for your routes, especially when using lazy loading or fetching data.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">Use Meaningful URLs</h3>
              <p className="text-indigo-700 text-sm">
                Create descriptive URLs that are SEO-friendly and easy for users to understand and remember.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technology Stack
            </h2>
            <p className="text-lg text-gray-600">
              Built with modern technologies for optimal learning experience
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="text-blue-500 mb-3">
                <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">React.js</h3>
              <p className="text-sm text-gray-600">18.x</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="text-green-500 mb-3">
                <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">React Router</h3>
              <p className="text-sm text-gray-600">6.x</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="text-purple-500 mb-3">
                <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Tailwind CSS</h3>
              <p className="text-sm text-gray-600">3.x</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="text-blue-600 mb-3">
                <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Cursor AI</h3>
              <p className="text-sm text-gray-600">Assisted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Importance */}
      <section className="py-16 bg-green-200 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why This Project Matters
          </h2>
          <p className="text-xl mb-8 text-black max-w-4xl mx-auto">
            This isn't just another clone or tutorial project. This is a comprehensive learning resource 
            designed specifically to help beginners understand React Router concepts clearly and practically.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-green-300 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">For Beginners</h3>
              <p className="text-black">
                Clear explanations, step-by-step examples, and practical demonstrations make React Router 
                concepts easy to understand for those just starting their React journey.
              </p>
            </div>
            
            <div className="bg-green-300 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">For Fellow Developers</h3>
              <p className="text-black">
                A comprehensive reference that covers all major React Router concepts with real-world 
                examples that you can actually use in your projects.
              </p>
            </div>
          </div>
          
          <div className="mt-8">
            <p className="text-lg text-black">
              This blog exists to help you master React Router and build better React applications. 
              Start your learning journey today!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

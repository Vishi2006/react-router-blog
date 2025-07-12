import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Notfound() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Project Header */}
        <div className="text-center mb-8">
          <div className="bg-blue-100 inline-flex items-center px-4 py-2 rounded-full text-blue-800 text-sm font-medium mb-4">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
            </svg>
            Don't worry, This is also part of the React Router project
          </div>
        </div>

        {/* Main 404 Content */}
        <div className="text-center mb-12">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-gray-300 mb-4">404</h1>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h2>
            <p className="text-xl text-gray-600 mb-6">
              Oops! The page you're looking for doesn't exist.
            </p>
          </div>

          {/* Current URL Display */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-red-800 mb-2">Invalid URL Detected</h3>
            <div className="bg-red-100 rounded p-3 mb-3">
              <code className="text-red-800 font-mono text-sm break-all">
                {location.pathname}
              </code>
            </div>
            <p className="text-red-700 text-sm">
              This URL doesn't match any of our defined routes, so React Router automatically displays this 404 page.
            </p>
          </div>

          {/* Navigation Options */}
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
            >
              Go to Homepage
            </Link>
            <div className="text-gray-500 text-sm">
              or try one of these valid routes:
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <Link
                to="/about"
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors text-sm"
              >
                /about
              </Link>
              <Link
                to="/lazyLoad"
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors text-sm"
              >
                /lazyLoad
              </Link>
              <Link
                to="/dynamicRoutes"
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors text-sm"
              >
                /dynamicRoutes
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors text-sm"
              >
                /contact
              </Link>
            </div>
          </div>
        </div>

        {/* Why Error Handling is Important */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Error Handling is Important
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">🚫 Prevents Broken User Experience</h3>
                <p className="text-blue-700 text-sm leading-relaxed">
                  Without proper error handling, users would see blank pages or browser errors when they visit invalid URLs. 
                  A custom 404 page provides a better user experience and guides them back to working content.
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">🔍 SEO Benefits</h3>
                <p className="text-green-700 text-sm leading-relaxed">
                  Search engines prefer websites with proper error handling. A well-designed 404 page helps maintain 
                  your site's SEO ranking and prevents search engines from indexing broken pages.
                </p>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">📊 Analytics & Monitoring</h3>
                <p className="text-purple-700 text-sm leading-relaxed">
                  Custom 404 pages can include tracking and analytics to help you identify which broken links 
                  users are trying to access, allowing you to fix them or create redirects.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">🛡️ Security Considerations</h3>
                <p className="text-orange-700 text-sm leading-relaxed">
                  Generic error pages can reveal sensitive information about your application structure. 
                  Custom 404 pages help maintain security by not exposing internal details.
                </p>
              </div>

              <div className="bg-indigo-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-indigo-800 mb-3">🎯 User Retention</h3>
                <p className="text-indigo-700 text-sm leading-relaxed">
                  Instead of losing users when they hit a dead end, a good 404 page can guide them to 
                  relevant content, keeping them engaged with your site.
                </p>
              </div>

              <div className="bg-pink-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-pink-800 mb-3">🔧 Professional Appearance</h3>
                <p className="text-pink-700 text-sm leading-relaxed">
                  Custom error pages show that you care about user experience and have a professionally 
                  built application with proper error handling.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How React Router Handles 404 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            How React Router Handles Invalid Routes
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">🔄 Route Matching Process</h3>
              <div className="bg-gray-900 rounded p-4 text-green-400 text-sm overflow-x-auto">
                <pre>{`// React Router checks routes in order
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      // ... other routes
      { path: "*", element: <NotFound /> } // Catch-all route
    ]
  }
]);`}</pre>
              </div>
              <p className="text-gray-700 text-sm mt-3">
                The <code className="bg-gray-200 px-1 rounded">path: "*"</code> is a catch-all route that matches any URL that doesn't match the defined routes above it.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">✅ Valid Routes</h4>
                <div className="space-y-2 text-blue-700 text-sm">
                  <p>• <code className="bg-blue-200 px-1 rounded">/</code> → Home page</p>
                  <p>• <code className="bg-blue-200 px-1 rounded">/about</code> → About page</p>
                  <p>• <code className="bg-blue-200 px-1 rounded">/contact</code> → Contact page</p>
                  <p>• <code className="bg-blue-200 px-1 rounded">/lazyLoad</code> → Lazy Load demo</p>
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-red-800 mb-3">❌ Invalid Routes</h4>
                <div className="space-y-2 text-red-700 text-sm">
                  <p>• <code className="bg-red-200 px-1 rounded">/invalid-page</code> → 404 page</p>
                  <p>• <code className="bg-red-200 px-1 rounded">/random/url</code> → 404 page</p>
                  <p>• <code className="bg-red-200 px-1 rounded">/about/extra</code> → 404 page</p>
                  <p>• <code className="bg-red-200 px-1 rounded">/nonexistent</code> → 404 page</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Test Invalid Routes */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Test Invalid Routes
          </h2>
          
          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Try visiting these invalid URLs to see the 404 page in action:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="bg-yellow-50 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-800 mb-2">Invalid Pages</h4>
                <div className="space-y-1 text-sm">
                  <p className="text-yellow-700">• /invalid-page</p>
                  <p className="text-yellow-700">• /random-url</p>
                  <p className="text-yellow-700">• /test/404</p>
                </div>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-semibold text-orange-800 mb-2">Invalid Sub-routes</h4>
                <div className="space-y-1 text-sm">
                  <p className="text-orange-700">• /about/invalid</p>
                  <p className="text-orange-700">• /contact/extra</p>
                  <p className="text-orange-700">• /lazyLoad/test</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-600 text-sm">
                💡 <strong>Tip:</strong> All of these invalid URLs will display this same 404 page, demonstrating how React Router's catch-all route works!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notfound;

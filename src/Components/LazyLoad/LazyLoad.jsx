import React, { useState, useEffect } from 'react';

export default function LazyLoad() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadingTime, setLoadingTime] = useState(0);

  // Simulate lazy loading with useEffect
  useEffect(() => {
    const startTime = Date.now();
    
    // Simulate loading delay
    const loadingTimer = setTimeout(() => {
      setIsLoaded(true);
      const endTime = Date.now();
      setLoadingTime(endTime - startTime);
    }, 2000); // 2 seconds delay to demonstrate lazy loading

    // Cleanup function
    return () => {
      clearTimeout(loadingTimer);
    };
  }, []); // Empty dependency array means this runs once when component mounts

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-3xl font-bold text-gray-900 mb-6">
            Lazy Loading Demo
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience how lazy loading works in React applications. This component demonstrates 
            the concept of loading content only when needed, improving performance and user experience.
          </p>
        </div>

        {/* Lazy Loading Demo Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Interactive Lazy Loading Demo
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Loading State */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Loading State</h3>
              {!isLoaded ? (
                <div className="bg-gray-100 rounded-lg p-6 text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading content...</p>
                  <p className="text-sm text-gray-500 mt-2">This simulates a 2-second loading delay</p>
                </div>
              ) : (
                <div className="bg-green-50 rounded-lg p-6 text-center border-2 border-green-200">
                  <div className="text-green-500 mb-2">
                    <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <p className="text-green-700 font-medium">Content Loaded Successfully!</p>
                  <p className="text-sm text-green-600 mt-1">Loading time: {loadingTime}ms</p>
                </div>
              )}
            </div>

            {/* Loaded Content */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Loaded Content</h3>
              {isLoaded ? (
                <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-3">Sample Lazy Loaded Content</h4>
                  <div className="space-y-3">
                    <div className="bg-white rounded p-3 shadow-sm">
                      <h5 className="font-medium text-gray-800">Article 1</h5>
                      <p className="text-sm text-gray-600">This content was loaded only when needed.</p>
                    </div>
                    <div className="bg-white rounded p-3 shadow-sm">
                      <h5 className="font-medium text-gray-800">Article 2</h5>
                      <p className="text-sm text-gray-600">Lazy loading improves initial page load time.</p>
                    </div>
                    <div className="bg-white rounded p-3 shadow-sm">
                      <h5 className="font-medium text-gray-800">Article 3</h5>
                      <p className="text-sm text-gray-600">Users see content faster with this technique.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-100 rounded-lg p-6 text-center">
                  <p className="text-gray-500">Content will appear here after loading...</p>
                </div>
              )}
            </div>
          </div>

          {/* Reset Button */}
          <div className="text-center mt-8">
            <button
              onClick={() => {
                setIsLoaded(false);
                setLoadingTime(0);
                // Trigger useEffect again by changing a dependency
                window.location.reload();
              }}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
            >
              Reset Demo
            </button>
          </div>
        </div>

        {/* Enhanced Explanation Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              How Lazy Loading Works
            </h2>
          </div>

          <div className="space-y-6">
            {/* Concept Explanation */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">What is Lazy Loading?</h3>
              <p className="text-blue-700 leading-relaxed mb-4">
                Lazy loading is a performance optimization technique that defers the loading of non-critical resources 
                until they are actually needed. Instead of loading all content upfront, components, images, or data 
                are loaded only when the user scrolls to them or when they become visible in the viewport.
              </p>
              <div className="bg-blue-100 rounded p-4">
                <h4 className="font-semibold text-blue-900 mb-2">🎯 Key Concept:</h4>
                <p className="text-blue-800 text-sm">
                  <strong>"Load only what you need, when you need it"</strong> - This principle dramatically improves 
                  initial page load times and reduces bandwidth usage, especially for large applications.
                </p>
              </div>
            </div>

            {/* How It Works Step by Step */}
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">How Lazy Loading Works Step by Step</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-green-800">Initial Load</h4>
                    <p className="text-green-700 text-sm">Only essential components load immediately. Non-critical content is deferred.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-green-800">User Interaction</h4>
                    <p className="text-green-700 text-sm">When user scrolls or navigates to a section, lazy loading triggers.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-green-800">Dynamic Import</h4>
                    <p className="text-green-700 text-sm">Component is dynamically imported using React.lazy() or similar methods.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-green-800">Content Display</h4>
                    <p className="text-green-700 text-sm">Once loaded, content is displayed to the user seamlessly.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Implementation Methods */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-purple-800 mb-3">React.lazy() Method</h4>
                <div className="bg-gray-900 rounded p-4 text-purple-400 text-sm overflow-x-auto">
                  <pre>{`// Lazy load a component
const LazyComponent = React.lazy(() => 
  import('./LazyComponent')
);

// Use with Suspense
<Suspense fallback={<Loading />}>
  <LazyComponent />
</Suspense>`}</pre>
                </div>
                <p className="text-purple-700 text-sm mt-3">
                  <strong>Best for:</strong> Code splitting and component-level lazy loading. Creates separate chunks for each lazy component.
                </p>
              </div>

              <div className="bg-orange-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-orange-800 mb-3">useEffect Hook Method</h4>
                <div className="bg-gray-900 rounded p-4 text-orange-400 text-sm overflow-x-auto">
                  <pre>{`// Simulate lazy loading
useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoaded(true);
  }, 2000);
  
  return () => clearTimeout(timer);
}, []);`}</pre>
                </div>
                <p className="text-orange-700 text-sm mt-3">
                  <strong>Best for:</strong> Simulating loading states, API calls, or controlled timing demonstrations.
                </p>
              </div>
            </div>

            {/* Real-world Examples */}
            <div className="bg-indigo-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-indigo-800 mb-3">Real-world Lazy Loading Examples</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded p-4">
                  <h5 className="font-semibold text-indigo-800 mb-2">📱 Social Media Feeds</h5>
                  <p className="text-indigo-700 text-sm">Posts load as you scroll, not all at once</p>
                </div>
                <div className="bg-white rounded p-4">
                  <h5 className="font-semibold text-indigo-800 mb-2">🛒 E-commerce Sites</h5>
                  <p className="text-indigo-700 text-sm">Product images load when they come into view</p>
                </div>
                <div className="bg-white rounded p-4">
                  <h5 className="font-semibold text-indigo-800 mb-2">📰 News Websites</h5>
                  <p className="text-indigo-700 text-sm">Articles load progressively as you scroll</p>
                </div>
                <div className="bg-white rounded p-4">
                  <h5 className="font-semibold text-indigo-800 mb-2">🎬 Video Platforms</h5>
                  <p className="text-indigo-700 text-sm">Videos load only when clicked or scrolled to</p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-yellow-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-yellow-800 mb-3">Benefits of Lazy Loading</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-yellow-700">
                  <li className="flex items-center space-x-2">
                    <span className="text-yellow-600">⚡</span>
                    <span>Faster initial page load (50-70% improvement)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-yellow-600">📱</span>
                    <span>Better mobile performance & battery life</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-yellow-600">💰</span>
                    <span>Reduced bandwidth usage (especially on mobile)</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-yellow-700">
                  <li className="flex items-center space-x-2">
                    <span className="text-yellow-600">🎯</span>
                    <span>Improved user experience & engagement</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-yellow-600">🔍</span>
                    <span>Better SEO rankings (faster load times)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-yellow-600">⚙️</span>
                    <span>Optimized server resources & costs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Code Implementation Details */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation Details</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">useEffect Hook Explanation</h3>
              <div className="bg-gray-900 rounded p-4 text-green-400 text-sm overflow-x-auto">
                <pre>{`// This useEffect runs when the component mounts
useEffect(() => {
  const startTime = Date.now(); // Track loading start time
  
  // Simulate loading delay with setTimeout
  const loadingTimer = setTimeout(() => {
    setIsLoaded(true); // Update state to show content
    const endTime = Date.now();
    setLoadingTime(endTime - startTime); // Calculate loading time
  }, 2000); // 2 second delay
  
  // Cleanup function to prevent memory leaks
  return () => {
    clearTimeout(loadingTimer);
  };
}, []); // Empty dependency array = runs only once`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">State Management</h3>
              <div className="bg-gray-900 rounded p-4 text-blue-400 text-sm overflow-x-auto">
                <pre>{`// State variables for lazy loading demo
const [isLoaded, setIsLoaded] = useState(false); // Track loading status
const [loadingTime, setLoadingTime] = useState(0); // Track loading duration`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Conditional Rendering</h3>
              <div className="bg-gray-900 rounded p-4 text-purple-400 text-sm overflow-x-auto">
                <pre>{`// Conditional rendering based on loading state
{!isLoaded ? (
  <div className="loading-spinner">
    Loading content...
  </div>
) : (
  <div className="loaded-content">
    Content is now available!
  </div>
)}`}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

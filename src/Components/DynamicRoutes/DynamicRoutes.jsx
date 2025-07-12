import React, { useState } from 'react';
import { Link, Routes, Route, useParams, useNavigate } from 'react-router-dom';

// Sample blog posts data - much simpler and clearer example
const blogPosts = [
  { 
    id: 1, 
    title: 'Getting Started with React Router', 
    author: 'John Doe',
    date: '2024-01-15',
    excerpt: 'Learn the basics of React Router and how to set up routing in your React applications.',
    content: 'React Router is a powerful library for handling navigation in React applications. It allows you to create single-page applications with multiple views and URLs. In this post, we\'ll explore the fundamentals of React Router and how to get started with it.'
  },
  { 
    id: 2, 
    title: 'Understanding Dynamic Routes', 
    author: 'Jane Smith',
    date: '2024-01-20',
    excerpt: 'Discover how dynamic routes work and how to use URL parameters in React Router.',
    content: 'Dynamic routes are one of the most powerful features of React Router. They allow you to create routes that can accept parameters, making your URLs more flexible and user-friendly. This post will show you how to implement and use dynamic routes effectively.'
  },
  { 
    id: 3, 
    title: 'Nested Routing in React', 
    author: 'Mike Johnson',
    date: '2024-01-25',
    excerpt: 'Learn how to create nested routes and organize your application structure.',
    content: 'Nested routing allows you to create complex routing structures where child routes are rendered within parent components. This creates a hierarchical navigation system that\'s perfect for complex applications with multiple levels of content.'
  },
  { 
    id: 4, 
    title: 'Advanced Routing Techniques', 
    author: 'Sarah Wilson',
    date: '2024-01-30',
    excerpt: 'Explore advanced routing patterns and best practices for React applications.',
    content: 'Once you\'ve mastered the basics of React Router, you can explore more advanced techniques like route guards, lazy loading, and complex routing patterns. This post covers these advanced concepts and how to implement them.'
  }
];

// Blog Post Detail Component
function BlogPostDetail() {
  const { postId } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(postId));
  const navigate = useNavigate();

  if (!post) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <h3 className="text-red-800 font-semibold mb-2">Post Not Found</h3>
        <p className="text-red-600">No blog post found with ID: {postId}</p>
        <button
          onClick={() => navigate('/dynamicRoutes')}
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
        >
          Back to Blog Posts
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900">Blog Post Details</h3>
        <button
          onClick={() => navigate('/dynamicRoutes')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Back to Blog Posts
        </button>
      </div>
      
      <div className="bg-blue-50 rounded-lg p-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-blue-800 mb-4">Post Information</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">ID:</span>
                <span className="text-gray-900">{post.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Title:</span>
                <span className="text-gray-900">{post.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Author:</span>
                <span className="text-gray-900">{post.author}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Date:</span>
                <span className="text-gray-900">{post.date}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-blue-800 mb-4">Route Information</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Current URL:</span>
                <span className="text-gray-900">/dynamicRoutes/post/{postId}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Parameter:</span>
                <span className="text-gray-900">postId = {postId}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Component:</span>
                <span className="text-gray-900">BlogPostDetail</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <h4 className="text-lg font-semibold text-blue-800 mb-3">Post Content</h4>
          <div className="bg-white rounded p-4">
            <p className="text-gray-700 leading-relaxed">{post.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main DynamicRoutes Component
export default function DynamicRoutes() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-3xl font-bold text-gray-900 mb-6">
            Dynamic Routes Demo
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn how dynamic routes work with a simple blog example. See how one component can display different content based on URL parameters.
          </p>
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Blog Posts Demo
          </h2>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <Routes>
              <Route path="/" element={
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Available Blog Posts</h3>
                    <p className="text-gray-600 mb-6">
                      Click on any post below to see how dynamic routes work. Notice how the URL changes but the same component displays different content!
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {blogPosts.map(post => (
                        <Link
                          key={post.id}
                          to={`/dynamicRoutes/post/${post.id}`}
                          className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow border-l-4 border-blue-500"
                        >
                          <h4 className="font-semibold text-gray-900 mb-2">{post.title}</h4>
                          <p className="text-gray-600 text-sm mb-2">{post.excerpt}</p>
                          <div className="flex justify-between items-center text-xs text-gray-500">
                            <span>By {post.author}</span>
                            <span>{post.date}</span>
                          </div>
                          <div className="mt-3 text-xs text-blue-600 font-medium">
                            Click to read full post →
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              } />
              <Route path="/post/:postId" element={<BlogPostDetail />} />
            </Routes>
          </div>
        </div>

        {/* How Dynamic Routes Work */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How Dynamic Routes Work</h2>
          
          <div className="space-y-6">
            {/* Simple Explanation */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">🎯 What are Dynamic Routes?</h3>
              <p className="text-blue-700 leading-relaxed mb-4">
                Dynamic routes are URLs that can change based on data. Instead of creating a separate page for each blog post, 
                you create <strong>one template</strong> that can display <strong>any post</strong> based on the URL parameter.
              </p>
              <div className="bg-blue-100 rounded p-4">
                <h4 className="font-semibold text-blue-900 mb-2">💡 Key Concept:</h4>
                <p className="text-blue-800 text-sm">
                  <strong>"One component, many pages"</strong> - A single component can render different content based on URL parameters.
                </p>
              </div>
            </div>

            {/* Step by Step */}
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">📋 How It Works Step by Step</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-green-800">User clicks a link</h4>
                    <p className="text-green-700 text-sm">User clicks on "Getting Started with React Router" → URL becomes `/dynamicRoutes/post/1`</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-green-800">React Router matches the route</h4>
                    <p className="text-green-700 text-sm">Router finds the pattern `/post/:postId` and extracts `postId = 1`</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-green-800">Component receives the parameter</h4>
                    <p className="text-green-700 text-sm">BlogPostDetail component gets `postId = 1` via `useParams()` hook</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-green-800">Component displays the right content</h4>
                    <p className="text-green-700 text-sm">Component finds post with ID 1 and displays its content</p>
                  </div>
                </div>
              </div>
            </div>

            {/* URL Examples */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-purple-800 mb-3">URL Structure</h4>
                <div className="bg-gray-900 rounded p-4 text-purple-400 text-sm overflow-x-auto">
                  <pre>{`// Route definition
<Route path="/post/:postId" element={<BlogPostDetail />} />

// URL examples
/dynamicRoutes/post/1  → Shows post with ID 1
/dynamicRoutes/post/2  → Shows post with ID 2
/dynamicRoutes/post/3  → Shows post with ID 3

// The :postId part is the parameter`}</pre>
                </div>
                <p className="text-purple-700 text-sm mt-3">
                  The <code className="bg-purple-200 px-1 rounded">:postId</code> is a placeholder that can be any value. React Router captures this value and passes it to your component.
                </p>
              </div>

              <div className="bg-orange-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-orange-800 mb-3">Accessing Parameters</h4>
                <div className="bg-gray-900 rounded p-4 text-orange-400 text-sm overflow-x-auto">
                  <pre>{`// In your component
import { useParams } from 'react-router-dom';

function BlogPostDetail() {
  const { postId } = useParams();
  
  // Find the specific post
  const post = blogPosts.find(p => 
    p.id === parseInt(postId)
  );
  
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}`}</pre>
                </div>
                <p className="text-orange-700 text-sm mt-3">
                  Use the <code className="bg-orange-200 px-1 rounded">useParams()</code> hook to get the URL parameter and use it to find the right data.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Real-world Examples */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Real-world Dynamic Route Examples</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-indigo-800 mb-3">📱 Social Media Profiles</h4>
              <div className="space-y-2 text-indigo-700 text-sm">
                <p>• <code className="bg-indigo-200 px-1 rounded">/profile/johndoe</code> → John's profile</p>
                <p>• <code className="bg-indigo-200 px-1 rounded">/profile/janesmith</code> → Jane's profile</p>
                <p>• Same component, different user data</p>
              </div>
            </div>
            
            <div className="bg-teal-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-teal-800 mb-3">🛒 E-commerce Products</h4>
              <div className="space-y-2 text-teal-700 text-sm">
                <p>• <code className="bg-teal-200 px-1 rounded">/product/laptop-123</code> → Laptop details</p>
                <p>• <code className="bg-teal-200 px-1 rounded">/product/phone-456</code> → Phone details</p>
                <p>• Same component, different product data</p>
              </div>
            </div>
            
            <div className="bg-pink-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-pink-800 mb-3">📰 News Articles</h4>
              <div className="space-y-2 text-pink-700 text-sm">
                <p>• <code className="bg-pink-200 px-1 rounded">/article/tech-news-2024</code> → Tech article</p>
                <p>• <code className="bg-pink-200 px-1 rounded">/article/sports-update</code> → Sports article</p>
                <p>• Same component, different article content</p>
              </div>
            </div>
            
            <div className="bg-yellow-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-yellow-800 mb-3">🎬 Video Platforms</h4>
              <div className="space-y-2 text-yellow-700 text-sm">
                <p>• <code className="bg-yellow-200 px-1 rounded">/video/tutorial-101</code> → Tutorial video</p>
                <p>• <code className="bg-yellow-200 px-1 rounded">/video/music-concert</code> → Concert video</p>
                <p>• Same component, different video content</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits of Dynamic Routes</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">🔄 Reusable Components</h3>
              <p className="text-blue-700 text-sm">
                One component can handle thousands of similar pages. No need to create separate components for each blog post, user profile, or product.
              </p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-3">🔗 SEO Friendly URLs</h3>
              <p className="text-green-700 text-sm">
                Create clean, descriptive URLs that are good for search engines and user experience. Users can bookmark and share specific pages.
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">⚡ Better Performance</h3>
              <p className="text-purple-700 text-sm">
                Load only the data you need for each page. No need to load all blog posts when viewing just one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

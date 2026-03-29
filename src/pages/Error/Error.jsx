import React from 'react';

const Error = () => {
    return (
        <div>
<div class="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800 px-5 text-center">
  <h1 class="text-6xl font-bold mb-4">404</h1>
  <h2 class="text-3xl font-semibold mb-2">Oops! Page Not Found</h2>
  <p class="mb-6">The page you’re looking for doesn’t exist or has been moved.</p>
  <div class="flex gap-4">
    <a href="/" class="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Go Home</a>
    <a href="/contact" class="px-6 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition">Contact Us</a>
  </div>
  <p class="mt-6 text-sm text-gray-500">Looks like you took a wrong turn in the internet jungle!</p>
</div>
        </div>
    );
};

export default Error;
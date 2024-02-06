/* eslint-disable react/prop-types */
// BlogPost.js
// import React from 'react';

const BlogPost = ({ blog }) => {
  // Function to convert HTML content
  const createMarkup = (htmlContent) => {
    return { __html: htmlContent };
  };

  return (
    <div className="container relative z-50 p-8 mx-auto backdrop-filter backdrop-blur-md bg-opacity-10">
      <div className="max-w-2xl mx-auto">
        <img
          className="object-cover object-center w-full mb-6 rounded-lg shadow-lg"
          src={blog.imageUrl}
          alt={blog.title}
        />
        <div className="mb-6 text-gray-600">
          <p className="text-sm">Published on {blog.date} </p>
        </div>
        {/* Render HTML content using dangerouslySetInnerHTML */}
        <div
          className="mb-6 text-lg leading-relaxed"
          dangerouslySetInnerHTML={createMarkup(blog.content)}
        />
      </div>
    </div>
  );
};

export default BlogPost;

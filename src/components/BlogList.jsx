/* eslint-disable react/prop-types */
// BlogList.js
import { useEffect } from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container relative z-50 p-8 mx-auto backdrop-filter backdrop-blur-sm bg-opacity-10">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-2">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="max-w-md mx-auto overflow-hidden bg-white shadow-md rounded-xl md:max-w-2xl"
          >
            <Link to={`/blog/${generateSlug(blog.title)}`}>
              {" "}
              <div className="md:flex">
                <div className="bg-black md:shrink-0">
                  <img
                    className="object-cover w-full h-48 md:h-full md:w-48"
                    src={blog.imageUrl}
                    alt={blog.title}
                  />
                </div>

                <div className="h-64 p-8 overflow-hidden lg:h-48">
                  <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
                    {blog.title}
                  </div>
                  <a
                    href="#"
                    className="block mt-1 text-lg font-medium leading-tight text-black hover:underline"
                  >
                    {blog.keywords}
                  </a>
                  <p className="py-2 mt-2 text-slate-500 ">{blog.subtitle}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

// Function to generate a slug from a string
const generateSlug = (str) => {
  return str.toLowerCase().replace(/\s+/g, "-");
};

export default BlogList;

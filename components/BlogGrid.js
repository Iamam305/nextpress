import React from "react";
import Link from "next/link";

const BlogGrid = ({ blogs }) => {
  return (
    <>
      <div>
          
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
        {blogs.map((blog) => (
                  <div className="p-4 md:w-1/3" key={blog.id}>
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      <img
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={blog.jetpack_featured_media_url}
                        alt="blog"
                      layout="fill"
                      />
                      <div className="p-6">
                        
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                          {blog.title.rendered}
                        </h1>
                        <div className="leading-relaxed mb-3" dangerouslySetInnerHTML={{__html: blog.excerpt.rendered}}/>
                        
                        <div className="flex items-center flex-wrap ">
                          <Link href={`blog/${blog.id}`}>
                          <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                          CONTINUE READING
                            <svg
                              className="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 12h14"></path>
                              <path d="M12 5l7 7-7 7"></path>
                            </svg>
                          </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  ))}
                </div>
              </div>
            </section>
          
      </div>
    </>
  );
};

export default BlogGrid;

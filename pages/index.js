import Head from "next/head";
import Link from "next/link";
import BlogGrid from "../components/BlogGrid";
import styles from "../styles/Home.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";

export default function Home({ blogs }) {
  return (
    <>
      <h2 className="text-center text-6xl pt-24 font-light text-indigo-500">LATEST BLOGS</h2>
      {blogs.map((blog) => (
        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-24 lg:flex-row flex-col items-center">
            <div class=" lg:w-4/6 md:w-full w-5/6 mb-10 md:mb-0">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src={blog.jetpack_featured_media_url}
              />
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                {blog.title.rendered}
              </h1>
              <p class="mb-8 leading-relaxed text-lg">
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed tacos poke beard tote bag. Heirloom echo
                park mlkshk tote bag selvage hot chicken authentic tumeric
                truffaut hexagon try-hard chambray.
              </p>
              <div className="flex items-center flex-wrap ">
                <Link href={`blog/${blog.id}`}>
                  <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 text-2xl font-semibold">
                    CONTINUE READING
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(
    `https://earninggway.com/wp-json/wp/v2/posts?per_page=5`
  );
  const blogs = await res.json();

  return {
    props: { blogs }, // will be passed to the page component as props
  };
}

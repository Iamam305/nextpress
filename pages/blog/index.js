import React from 'react'
import BlogGrid from '../../components/BlogGrid'

const index = ({blogs}) => {
  return (
    <>
    <h2 className='container mx-auto pt-24 text-6xl font-light text-indigo-500'>BLOGS -</h2>
      
    <BlogGrid blogs={blogs} />
    
  </>
  )
}


export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(
    `https://earninggway.com/wp-json/wp/v2/posts?per_page=100`
  );
  const blogs = await res.json();

  return {
    props: { blogs }, // will be passed to the page component as props
  };
}


export default index
// import { useRouter } from 'next/router'

const SinglePost = ({ post }) => {
  // const router = useRouter();
  // const slug = router.query
  console.log(post);
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
          <img
            className="lg:w-4/6 md:w-5/6 w-full mb-10 object-cover object-center rounded"
            alt="hero"
            src={post.jetpack_featured_media_url}
          />
          <div className="w-full md:w-5/6 lg:w-4/6 flex flex-col mb-16 items-center text-left">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {post.title.rendered}
            </h1>
            <div className="mb-8 leading-relaxed text-2xl" dangerouslySetInnerHTML={{__html: post.content.rendered}}/>
              
           
          </div>
        </div>
      </section>
    </>
  );
};

// export async function getServerSideProps(context) {
//   // Fetch data from external API
//   const res = await fetch(
//     `https://earninggway.com/wp-json/wp/v2/posts/${context.params.id}`
//   );
//   const data = await res.json();

//   // Pass data to the page via props
//   return { props: { data } };
// }

export async function getStaticPaths(context) {

  const res = await fetch(
    `https://earninggway.com/wp-json/wp/v2/posts/`
  );
  const data = await res.json();
  const paths = data.map((e)=>(
    {params:{
      id: e.id.toString()
    }}

  ))
  return {
    paths,
    fallback: true // false or 'blocking'
  };
}


export async function getStaticProps(context) {

  const res = await fetch(
    `https://earninggway.com/wp-json/wp/v2/posts/${context.params.id}`
  );
  const post = await res.json();
  return {
    props: {post}, // will be passed to the page component as props
  }
}

export default SinglePost;

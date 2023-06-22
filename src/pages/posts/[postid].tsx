import React from 'react';
import { useRouter } from 'next/router';
import { client } from '@/lib/sanityClient';

interface IProd {
  title: string;
}

const getBlogData = async () => {
  const res = await client.fetch(`*`);
  return res;
};

const PostDetail: React.FC<{ post: IProd }> = ({ post }) => {
  // const router = useRouter();
  // if (router.isFallback){
  //     return <h1>Loading...</h1>
  // }
  console.log("Page Detail")
  console.log(post.title)

  return (
    <div>
      <p>{post.title}</p>
      {/* <p>{post.body}</p> */}
    </div>
  );
};

export default PostDetail;

export async function getStaticProps(context: any) {
  const { params } = context;
  //const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`)
  //const data = await response.json()
  console.log(`Generating page for posts/${params.postid}`);

  const data1 = await client.fetch(`*[_type=="blog"  && title=="${params.postid}"]{title}`);
  const data = data1[0]
  console.log(data);

  if (!data.title) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post: data,
    },
  };
}

export async function getStaticPaths() {
  // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  // const data = await response.json()

  const data:IProd[] = await client.fetch(`*[_type=="blog"]{title}`);

  const paths = data.map(post=>{
      return {
          params:{ postid: `${post.title}` }
      }
  })
  console.log("-----Get Static Paths....");
  return {
    // paths: [
    //   {
    //     params: { postid: 'blog-1' },
    //   },
    //   {
    //       params: {postid: 'blog-2'}
    //   },
    //   // {
    //   //     params: {postid: '3'}
    //   // },
    // ],
    paths,
    fallback: 'blocking',
  };
}

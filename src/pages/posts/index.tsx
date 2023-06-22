import React, { FC } from 'react'
import Link from 'next/link'
import {client} from '@/lib/sanityClient'

interface IProd{
    title:string;
}

const getBlogData = async ()=>{
  const res = await client.fetch(`*`);
  return res
}

const PostsList: FC<{ posts: IProd[] }> = ({ posts }) => {

  return (
    <div>
        {
            posts.map((post,i) => {
                return (
                    <div key={i}>
                        {/* <p>{post.title}</p> */}

                        <Link href={`posts/${post.title}`} > 
                        <p>{post.title}</p>
                       </Link>

                       {/* <Link href={`posts/${post.id}`} > 
                        <p>{post.id} - {post.title}</p>
                       </Link> */}
                    </div>
                )
            })
        }        
    </div>
  )
}

export default PostsList


export async function getStaticProps(){
    const data:IProd[] = await client.fetch(`*[_type=="blog"]{title}`);
    //console.log(data);

    //console.log("GETSP")
    //const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    //const data = await response.json()

    //const data = await res.json()
    //console.log(data)
    return {
        props:{
            posts: data
        }
    }
}


import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
//import {client} from '@/lib/sanityClient'
import { get } from 'http'

// const getBlogData = async ()=>{
//   //const res = await client.fetch(`*`);
//   //return res
// }


export default  function Home() {
  //const res = await getBlogData();
  //console.log(res);

  return (
    <>
      <h1>********* SANITY *********</h1>
      <div>
      < Link href="/users">Users</Link>
      </div>
      <Link href="/posts">Posts</Link>
    </>
  )
}

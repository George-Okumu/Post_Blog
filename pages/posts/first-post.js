import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost(){
    return (
        <Layout>
        <Head>
            <title>Post Page</title>
        </Head>
        <h1>This is my first Post</h1>
        <Link href="/">
            <a>Back Home</a>
        </Link>
        
        
        {/* <Image
          src="/public/images/favicon.ico" // Route of the image file
          height={144} // Desired size with correct aspect ratio
          width={144} // Desired size with correct aspect ratio
          alt="George"
        /> */}
        </Layout>

    )
   

    

}
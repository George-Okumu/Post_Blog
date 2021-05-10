import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost(){
    return (
        <>
        <Layout>
        <Head>
            <title>Post Page</title>
        </Head>
        <h1 className="">This is my first Post</h1>

        <Link href="/">
        <a className="text-blue-900">Back home</a>
        </Link>
        
    
        </Layout>
        </>

    )
   

    

}
import Link from 'next/link'

export default function FirstPost(){
    return (
        <>
        <h1>This is my first Post</h1>
        <Link href="/">
            <a>Back Home</a>
        </Link>
        </>
    )

}
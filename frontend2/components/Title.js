import Head from 'next/head';

export default function Title({title}){
    return (
    <div>
        <Head>
            <title>{title} | Next Movies</title>
        </Head>
    </div>
    )
}
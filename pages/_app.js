import React from 'react'
import '../components/app.css'
import Head from 'next/head'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Weatherer</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}
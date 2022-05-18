import React from 'react';
import Head from 'next/head';
import { StyleProvider } from '@context/StyleContext';
import Layout from '@components/Layout';
import '../styles/base.scss';

function App({ Component, pageProps }) {
    return (
        <StyleProvider>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </StyleProvider>
    );
}

export default App;

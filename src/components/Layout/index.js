import Head from 'next/head';
import PageHeader from '../PageHeader';
import PageFooter from '../PageFooter';
import classes from './Layout.module.scss';

function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Jolien Somers Fotografie</title>
                <meta name="description" content="Fotografie portfolio van Jolien Somers" />
            </Head>
            <PageHeader />
                <main className={classes.main}>
                    {children}
                </main>
            <PageFooter />
        </>
    );
}

export default Layout;

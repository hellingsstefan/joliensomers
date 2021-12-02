import Head from 'next/head';
import PageHeader from '../PageHeader';
import PageFooter from '../PageFooter';
import styles from './Layout.module.scss';

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Jolien Somers Fotografie</title>
                <meta name="description" content="Fotografie portfolio van Jolien Somers" />
            </Head>
            <PageHeader />
            <main className={styles.main}>
                {children}
            </main>
            <PageFooter />
        </>
    );
}

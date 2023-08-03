import {AppProps} from 'next/app';
import Head from 'next/head';
import React, {ReactNode} from 'react';
import '@/styles/global.scss';
import {Header, IHeaderLink} from "@/components/common/Header";
import {constantLinks} from "@/data/constants";

interface LayoutProps {
    children: ReactNode;
}

const links : IHeaderLink[] = constantLinks;

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <>
            <Header links={links}/>
            <main className="">{children}</main>
            <footer>
                {/* Your footer content goes here */}
                <p>© {new Date().getFullYear()} My Website Footer</p>
            </footer>
        </>
    );
};

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                {/* Meta tags for the entire application */}
                <meta charSet="utf-8"/>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="description" content="Your website description here"/>
                {/* Add more meta tags as needed */}
                <title>Your Website Title</title>
            </Head>
            <Layout>
                {/* Pass the Component and pageProps to the layout */}
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
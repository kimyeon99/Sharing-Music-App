import Layout from "../components/Layout";
import NavBar from "../components/Navbar";

export default function App({Component, pageProps}){
    return (
            <Layout>
                <Component {...pageProps} />
            </Layout>
    )
}
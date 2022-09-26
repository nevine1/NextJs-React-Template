import '../styles/globals.css'
import type { AppProps } from 'next/app'
/* import {Provider} from 'react-redux'
import store from '../store/store'; */
import Layout from '../components/layout/Layout';
import '../components/layout/styles.scss'; 

function MyApp({ Component, pageProps }: AppProps) {
  return <Layout>
                <Component {...pageProps} />
            </Layout>
        
}

export default MyApp
 
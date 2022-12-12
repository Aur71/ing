import '../styles/globals.scss'
import { AppProvider } from '../context/context'
import Layout from '../components/layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  )
}

export default MyApp

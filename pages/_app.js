import DefaultLayout from '../components/layout/DefaultLayout'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}

export default MyApp

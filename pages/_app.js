import '../styles/globals.css'
import './signup.css'
import './login.css'
// import 'pure-react-carousel/dist/react-carousel.es.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../components/Feed.css"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

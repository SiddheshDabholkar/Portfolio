import "../styles/globals.scss";
import Footer from "../Layout/Footer";
import Navbar from "../Layout/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

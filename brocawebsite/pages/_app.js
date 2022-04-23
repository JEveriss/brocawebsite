import Home from ".";
import "../styles/globals.css";
import "../styles/logo.css"
import "../styles/header.css"
import "../styles/frontpage.css"
import About from "./about";
import Header from "./components/header";
import FrontPage from "./frontpage";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <Header/>
      <FrontPage/>
      <About/>
    </div>
  );
}

export default MyApp;

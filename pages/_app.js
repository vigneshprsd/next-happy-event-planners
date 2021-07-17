import Layout from "../components/Layout";
import "../styles/globals.css";
import "../styles/App.css";
import "../styles/flaticon.css";
import "../styles/shortcodes.css";
import "../styles/main.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  );
}

export default MyApp;

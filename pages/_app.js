import "../styles/globals.css";
import "@fontsource/montserrat/200.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/josefin-sans";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

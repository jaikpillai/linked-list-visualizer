import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "../contexts/ThemeContext";
import { SettingsProvider } from "../contexts/SettingsContext";
import { Footer } from "../components/Footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <SettingsProvider>
        <Component {...pageProps} />
      </SettingsProvider>
    </ThemeProvider>
  );
}

export default MyApp;

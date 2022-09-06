import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "../contexts/ThemeContext";
import { SettingsProvider } from "../contexts/SettingsContext";
import Head from "next/head";
import general from "../general";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <SettingsProvider>
        <Head>
          <title>{general.app_name}</title>
        </Head>
        <Component {...pageProps} />
      </SettingsProvider>
    </ThemeProvider>
  );
}

export default MyApp;

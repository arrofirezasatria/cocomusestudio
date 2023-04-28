import type { AppProps } from "next/app";
import ThemeProvider from "@modules/components/ThemeContext";
import "../../public/global.css";
import { Rubik } from "next/font/google";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

import "react-toastify/dist/ReactToastify.css";
import { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { GlobalStyle } from "../../styles/Global";
import { AuthProvider } from "../contexts/AuthContext";
import NextNprogress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer style={{ fontSize: "1.4rem" }} />
      <NextNprogress
        color=" #00AFFE"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
        options={{ easing: "ease", speed: 500 }}
      />
      <AuthProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;

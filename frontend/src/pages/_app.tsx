import 'react-toastify/dist/ReactToastify.css';
import { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { GlobalStyle } from "../../styles/Global";
import { AuthProvider } from "../contexts/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer style={{ fontSize: '1.4rem' }} />
      <AuthProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;

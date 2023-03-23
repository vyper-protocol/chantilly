import "@/styles/globals.css";

import Layout from "@/components/Layout";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const QUERY_CLIENT = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={QUERY_CLIENT}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer
		position={toast.POSITION.BOTTOM_RIGHT}
		autoClose={5000}
		hideProgressBar={false}
		theme="dark"
		newestOnTop={false}
		closeOnClick
		pauseOnHover
		pauseOnFocusLoss={false}
		/>
    </QueryClientProvider>
  );
}

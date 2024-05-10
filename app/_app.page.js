import Layout from '../components/Layout';

// This is the custom App component that wraps all other page components
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

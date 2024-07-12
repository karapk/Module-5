export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

/*
The App component is the root component for all pages in your application. It is useful for passing down additional data to the page. 
In this case, we are passing down the pageProps to the Component.
The purposed of this component is to wrap the entire application with a layout or context provider that is shared across all pages.
*/
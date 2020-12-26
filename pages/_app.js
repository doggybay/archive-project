import React, { useEffect } from 'react';
//import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import Nav from './src/components/layout/Nav';
import { Provider } from 'react-redux';
import store from '../src/store';
import * as AuthClient from 'next-auth/client';


const MyApp = (props) => {
  const { Component, pageProps } = props;
  const { session } = pageProps;
  
  
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Archive</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <Provider store={store}>
        <AuthClient.Provider options={{ site: process.env.SITE }} session={session}>
          <ThemeProvider theme={theme}>
            <Nav />
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </AuthClient.Provider>
      </Provider>
    </React.Fragment>
  );
}
// export default class MyApp extends App {
//   componentDidMount() {
//     // Remove the server-side injected CSS.
//     const jssStyles = document.querySelector('#jss-server-side');
//     if (jssStyles) {
//       jssStyles.parentElement.removeChild(jssStyles);
//     }
//   }

//   render() {
//     const { Component, pageProps } = this.props;
    
//     return (
//       <React.Fragment>
//         <Head>
//           <title>Archive</title>
//           <meta
//             name="viewport"
//             content="minimum-scale=1, initial-scale=1, width=device-width"
//           />
//         </Head>
        
//         <Provider store={store}>
//           <ThemeProvider theme={theme}>
//             <Nav />
//             {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
//             <CssBaseline />
//             <Component {...pageProps} />
//           </ThemeProvider>
//         </Provider>
//       </React.Fragment>
//     );
//   }
// }

export default MyApp;
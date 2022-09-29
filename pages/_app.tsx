import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Amplify from 'aws-amplify';
import config from '../src/aws-exports';
import { wrapper } from "@store/index";

Amplify.configure(config);

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
      <Component {...pageProps} />
  )
}

export default wrapper.withRedux(MyApp);

// export default (MyApp);

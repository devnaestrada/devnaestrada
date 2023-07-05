import '../globals.css';

import type { AppProps } from 'next/app';
import * as React from 'react';
import { SSRProvider } from 'react-aria';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Rubik, Roboto } from 'next/font/google';

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
  weight: ['400', '700'],
});


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`
      ${rubik.variable}
      ${roboto.variable}
    `}
    >
      <QueryClientProvider client={queryClient} contextSharing>
        <SSRProvider>
          <Component {...pageProps} />
        </SSRProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;

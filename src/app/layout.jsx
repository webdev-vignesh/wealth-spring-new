'use client';

import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Inter } from 'next/font/google';
import { Provider } from 'react-redux';
import store from '@/store/store';
import { persistor } from '@/store/store';
import { PersistGate } from 'redux-persist/integration/react';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {children}
          </PersistGate>
        </Provider>
      </body>
    </html>
  )
}

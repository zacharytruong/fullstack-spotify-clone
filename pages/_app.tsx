import type { AppProps } from 'next/app';
import { StoreProvider } from 'easy-peasy';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import 'reset-css';
import PlayerLayout from '../components/playerLayout';
import { store } from '../lib/store';

const theme = extendTheme({
  colors: {
    gray: {
      100: '#f5f5f5',
      200: '#eee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#242424',
      900: '#212121'
    }
  },
  components: {
    Button: {
      variant: {
        link: {
          ':focus': {
            outline: 'none',
            boxShadow: 'none'
          }
        }
      }
    }
  }
});

type AuthProps = AppProps & {
  Component: {
    authPage?: boolean
  }
};

const App = ({ Component, pageProps }: AuthProps) => {
  return (
    <ChakraProvider theme={theme}>
      <StoreProvider store={store}>
        {Component.authPage ? (
          <Component {...pageProps} />
        ) : (
          <PlayerLayout>
            <Component {...pageProps} />
          </PlayerLayout>
        )}
      </StoreProvider>
    </ChakraProvider>
  );
};

export default App;

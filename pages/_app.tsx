import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import 'reset-css';
import PlayerLayout from '../components/playerLayout';

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

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <PlayerLayout>
        <Component {...pageProps} />
      </PlayerLayout>
    </ChakraProvider>
  );
};

export default App;

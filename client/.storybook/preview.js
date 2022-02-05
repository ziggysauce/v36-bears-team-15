import GlobalStyles from '../src/styles/global';
import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme';

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </>
  ),
];

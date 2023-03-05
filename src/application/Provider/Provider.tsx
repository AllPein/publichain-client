import React from 'react';
import { Provider as StoreProvider } from 'react-redux';

import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from 'styled-components';

import { theme } from '@/application/theme/theme.default';
import store from '@/store/InitStore';
import { history } from '@/utils/history';

type Props = {
  children: React.ReactNode;
};

const Provider: React.FC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StoreProvider store={store}>
      <ConnectedRouter history={history}>{children}</ConnectedRouter>
    </StoreProvider>
  </ThemeProvider>
);

export { Provider };

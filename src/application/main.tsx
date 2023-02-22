import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from '@/application/Provider/Provider';
import { GlobalStyles } from '@/application/GlobalStyles';
import { Root } from '@/application/Root/Root';

ReactDOM.render(
  <Provider>
    <GlobalStyles />
    <Root />
  </Provider>,
  document.getElementById('root'),
);

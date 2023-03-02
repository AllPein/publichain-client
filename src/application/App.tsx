import React from 'react';

import { GlobalStyles } from '@/application/GlobalStyles';
import { Provider } from '@/application/Provider/Provider';
import { Root } from '@/application/Root/Root';
import { useMount } from '@/hooks/useMount';
import { projectService } from '@/services/ProjectService';
import { xrpl, XummPkce } from '@/utils/window';

const App = () => {
  useMount(() => {
    const init = async () => {
      try {
        const xrplClient = new xrpl.Client(import.meta.env.VITE_LEDGER_NET);
        const xumm = new XummPkce(import.meta.env.VITE_XUMM_API_KEY);
        await projectService.init(xrplClient, xumm);
      } catch (e) {
        throw Error('Service has been thrown error at initialized step');
      }
    };

    init();
  });

  return (
    <Provider>
      <GlobalStyles />
      <Root />
    </Provider>
  );
};

export { App };

import React from 'react';

import { GlobalStyles } from '@/application/GlobalStyles';
import { Provider } from '@/application/Provider/Provider';
import { Root } from '@/application/Root/Root';
import { Modals } from '@/components/Modals/Modals';
import { useMount } from '@/hooks/useMount';
import { projectService } from '@/services/ProjectService';
import { AxiosClient } from '@/services/axios-client';
import { xrpl, XummPkce } from '@/utils/window';

const App = () => {
  useMount(() => {
    const init = async () => {
      try {
        const xrplClient = new xrpl.Client(import.meta.env.VITE_LEDGER_NET);
        const xumm = new XummPkce(import.meta.env.VITE_XUMM_API_KEY);
        const axiosClient = new AxiosClient();
        axiosClient.init(import.meta.env.VITE_BASE_API_URL);

        await projectService.init(xrplClient, xumm, axiosClient);
      } catch (e) {
        throw e;
      }
    };

    init();
  });

  return (
    <Provider>
      <GlobalStyles />
      <Root />
      <Modals />
    </Provider>
  );
};

export { App };

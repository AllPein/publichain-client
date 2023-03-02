import { AxiosResponse } from 'axios';

import { AxiosClient, IProjectService } from '@/services/types';
import { AccountInfo } from '@/store/StoreTypes';
import { XummPkce } from '@/utils/window';

class ProjectService implements IProjectService {
  #client: any;

  #xumm: typeof XummPkce;

  // @ts-ignore
  #axiosClient: AxiosClient;

  get client() {
    return this.#client as any;
  }

  get axiosClient() {
    return this.#axiosClient as AxiosClient;
  }

  get xumm() {
    return this.#xumm as typeof XummPkce;
  }

  async init(client, xumm, axiosClient) {
    this.#axiosClient = axiosClient;
    this.#client = client;
    this.#xumm = xumm;
    await client.connect();
  }

  async login(): Promise<AccountInfo> {
    const { me } = await this.#xumm.authorize();

    return me;
  }

  async mint(wallet): Promise<AxiosResponse<any>> {
    return this.#axiosClient.post('/nft/mint', wallet);
  }
}

export const projectService = new ProjectService();

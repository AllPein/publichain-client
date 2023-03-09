import { AxiosResponse } from 'axios';

import { AxiosClient, IProjectService } from '@/services/types';
import { jwt, XummPkce, XummSdkJwt } from '@/utils/window';

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

  async getArticles(): Promise<AxiosResponse<any>> {
    try {
      const res = await this.#axiosClient.get('/articles');

      return res;
    } catch (err: any) {
      return err.response.data.error;
    }
  }

  async getArticleInfo(id: string): Promise<AxiosResponse<any>> {
    try {
      const res = await this.#axiosClient.get(`/articles/${id}`);

      return res;
    } catch (err: any) {
      return err.response.data.error;
    }
  }

  async mint(wallet): Promise<void> {
    const Sdk = new XummSdkJwt(jwt);
    const transactionBlob = {
      txjson: {
        TransactionType: 'NFTokenMint',
        TransferFee: 0,
        NFTokenTaxon: 0,
        Flags: 8,
        Fee: '10',
        URI: '697066733A2F2F62616679626569676479727A74357366703775646D37687537367568377932366E6634646675796C71616266336F636C67747179353566627A6469',
        Memos: [
          {
            Memo: {
              MemoType:
                '687474703A2F2F6578616D706C652E636F6D2F6D656D6F2F67656E65726963',
              MemoData: '72656E74',
            },
          },
        ],
        Account: wallet.classicAddress,
      },
    };
    const a = await Sdk.payload.create(transactionBlob, true);
    console.log(a);
  }
}

export const projectService = new ProjectService();

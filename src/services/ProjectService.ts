import { IProjectService } from '@/services/types';
import { AccountInfo } from '@/store/StoreTypes';
import { xrpl } from '@/xrpl';

class ProjectService implements IProjectService {
  #client: any;

  get client() {
    return this.#client as any;
  }

  init(client) {
    this.#client = client;
  }

  // sEdVQSP17n42nBXcV5a1eGqAPycNvuo
  async connect(seed: string | undefined): Promise<AccountInfo> {
    await this.#client.connect();
    const testWallet = seed
      ? xrpl.Wallet.fromSeed(seed)
      : (await this.#client.fundWallet()).wallet;
    const response = await this.#client.request({
      command: 'account_info',
      account: testWallet.address,
      ledger_index: 'validated',
    });
    return response.result;
  }
}

export const projectService = new ProjectService();

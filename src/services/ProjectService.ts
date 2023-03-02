import { IProjectService } from '@/services/types';
import { AccountInfo } from '@/store/StoreTypes';
import { XummPkce } from '@/utils/window';

class ProjectService implements IProjectService {
  #client: any;
  #xumm: typeof XummPkce;

  get client() {
    return this.#client as any;
  }

  get xumm() {
    return this.#xumm as any;
  }

  async init(client, xumm) {
    this.#client = client;
    this.#xumm = xumm;
    await client.connect();
  }

  async login(): Promise<AccountInfo> {
    const { me } = await this.#xumm.authorize();
    return me;
  }
}

export const projectService = new ProjectService();

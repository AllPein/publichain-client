import { IProjectService } from '@/services/types';
import { AccountInfo } from '@/store/StoreTypes';

class ProjectService implements IProjectService {
  #client: any;

  get client() {
    return this.#client as any;
  }

  init(client) {
    this.#client = client;
    client.connect();
  }

  // sEdVQSP17n42nBXcV5a1eGqAPycNvuo
  async login(): Promise<AccountInfo> {
    // @ts-ignore
    const { XummPkce } = window;
    const auth = new XummPkce('de321219-87c2-4201-8bac-741b980ce180');

    const { me } = await auth.authorize();
    console.log(me);
    return me;
  }
}

export const projectService = new ProjectService();

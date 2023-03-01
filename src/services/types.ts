import { AccountInfo } from '@/store/StoreTypes';

export interface IProjectService {
  client: any;

  login(seed: string | undefined): Promise<AccountInfo>;
}

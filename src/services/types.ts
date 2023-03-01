import { AccountInfo } from '@/store/StoreTypes';

export interface IProjectService {
  client: any;

  connect(seed: string | undefined): Promise<AccountInfo>;
}

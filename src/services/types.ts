import { AccountInfo } from '@/store/StoreTypes';
import { XummPkce } from '@/utils/window';

export interface IProjectService {
  client: any;
  xumm: typeof XummPkce;

  login(): Promise<AccountInfo>;
}

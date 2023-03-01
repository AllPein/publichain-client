import actionCreatorFactory from 'typescript-fsa';

import { AccountInfo } from '@/store/StoreTypes';

const factory = actionCreatorFactory('user');

export type UserStore = {
  accountInfo: AccountInfo | null;
  isLoggedId: boolean;
};

export const UserAction = {
  initConnect: factory<string | undefined>('INIT_CONNECT'),
  setAccountInfo: factory<AccountInfo>('SET_ACCOUNT_INFO'),
  setIsLoggedIn: factory<boolean>('SET_IS_LOGGED_IN'),
  resetState: factory('RESET_STATE'),
};

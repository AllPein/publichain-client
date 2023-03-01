import { User } from '@/types/UserTypes';
import actionCreatorFactory from 'typescript-fsa';

const factory = actionCreatorFactory('user');

export type UserStore = {
  userInfo: User | null;
  isLoggedId: boolean;
};

export const UserAction = {
  setUserInfo: factory<User | null>('SET_USER_INFO'),
  setIsLoggedIn: factory<boolean>('SET_IS_LOGGED_IN'),
  resetState: factory('RESET_STATE'),
};

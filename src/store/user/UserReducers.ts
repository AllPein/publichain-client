import { User } from '@/types/UserTypes';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { UserAction, UserStore } from './UserAction';

export const canvasSettingsStoreInitialState: UserStore = {
  userInfo: null,
  isLoggedId: false,
};

export const UserReducers = reducerWithInitialState<UserStore>(
  canvasSettingsStoreInitialState,
)
  .case(UserAction.setUserInfo, (state: UserStore, userInfo: User | null) => {
    return {
      ...state,
      userInfo,
    };
  })
  .case(UserAction.setIsLoggedIn, (state: UserStore, isLoggedId: boolean) => {
    return {
      ...state,
      isLoggedId,
    };
  });

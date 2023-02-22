import { User } from "@/types/UserTypes";
import { reducerWithInitialState } from "typescript-fsa-reducers";

import { UserAction, UserStore } from "./UserAction";

export const canvasSettingsStoreInitialState: UserStore = {
  userInfo: {
    username: "",
    walletId: "",
  },
  isLoggedId: false,
};

export const UserReducers = reducerWithInitialState<UserStore>(
  canvasSettingsStoreInitialState
)
  .case(UserAction.setUserInfo, (state: UserStore, userInfo: User) => {
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

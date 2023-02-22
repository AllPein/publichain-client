import { History } from "history";
import { AnyAction, Dispatch } from "redux";

// eslint-disable-next-line import/no-cycle
import { UserStore } from "./user/UserAction";

export interface RootState {
  user: UserStore;
}

export type StoreDependencies = {
  history: History;
  dispatch: Dispatch<AnyAction>;
};

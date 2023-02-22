import { RootState } from "@/store/StoreTypes";
import { combineReducers } from "redux";

import { UserReducers } from "./user/UserReducers";

export default combineReducers<RootState>({
  user: UserReducers,
});

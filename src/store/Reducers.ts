import { combineReducers } from 'redux';

import { RootState } from '@/store/StoreTypes';
import { LoaderReducers } from '@/store/loader/LoaderReducers';

import { UserReducers } from './user/UserReducers';

export default combineReducers<RootState>({
  user: UserReducers,
  loader: LoaderReducers,
});

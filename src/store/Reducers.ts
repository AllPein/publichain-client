import { combineReducers } from 'redux';

import { ModalReducers } from '@/store/Modal/ModalReducers';
import { RootState } from '@/store/StoreTypes';
import { LoaderReducers } from '@/store/loader/LoaderReducers';
import { WebsocketReducers } from '@/store/websocket/websocketReducers';

import { UserReducers } from './user/UserReducers';

export default combineReducers<RootState>({
  user: UserReducers,
  loader: LoaderReducers,
  modal: ModalReducers,
  websocket: WebsocketReducers,
});

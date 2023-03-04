/* eslint-disable import/no-cycle */
import { combineEpics } from 'redux-observable';

import { UserEpics } from '@/store/user/UserEpics';
import { WebsocketEpics } from '@/store/websocket/websocketEpics';

export default combineEpics(...UserEpics, ...WebsocketEpics);

import { DEFAULT_BACKEND_PATH } from '@app/constants/WebsocketConstants';
import { BackendPath } from '@app/types/websocket/websocketPayload';
import { createSelector } from 'reselect';

import { RootState } from '../StoreTypes';

import { WebsocketReadyState } from './epics/sendWebsocketEpic';

export const selectWebsockets = createSelector(
  (state: RootState) => state.websocket.instances,
  (websockets) => websockets,
);

const isWebsocketConnected = (websockets, backendPath: BackendPath) => {
  return (
    backendPath in websockets &&
    websockets[backendPath]?.readyState === WebsocketReadyState.Open
  );
};

export const selectIsMainWebsocketInitialized = createSelector(
  selectWebsockets,
  (websockets) => isWebsocketConnected(websockets, DEFAULT_BACKEND_PATH),
);

import { AccountInfo } from '@/store/StoreTypes';

export type VegaWebSocketPayload = {
  LOGIN: string;
  REGISTER: string;
  USER_INFO: AccountInfo;
};

export type VegaWebSocketSendPayload = {
  LOGIN: null | { token: string };
  REGISTER: Omit<AccountInfo, 'token'>;
  USER_INFO: null;
};

export type WebsocketError = {
  error: {
    code: string;
    message: string;
  };
};

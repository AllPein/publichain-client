import { AccountInfo } from '@/store/StoreTypes';

export type VegaWebSocketPayload = {
  LOGIN: string;
  REGISTER: string;
  USER_INFO: AccountInfo;
  PUBLISH_RESULT: boolean;
  PUBLISH: null;
};

export type VegaWebSocketSendPayload = {
  LOGIN: null | { token: string };
  REGISTER: Omit<AccountInfo, 'token' | 'imageUrl'>;
  USER_INFO: null;
  PUBLISH: {
    title: string;
    body: any;
    address: string;
  };
  PUBLISH_RESULT: null;
};

export type WebsocketError = {
  error: {
    code: string;
    message: string;
  };
};

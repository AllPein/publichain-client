import { AccountInfo } from '@/store/StoreTypes';

export type VegaWebSocketPayload = {
  LOGIN: string;
  REGISTER: string;
  USER_INFO: AccountInfo;
  PUBLISH_RESULT: boolean;
  PUBLISH: null;
  COLLECT: null;
};

export type VegaWebSocketSendPayload = {
  LOGIN: null | { token: string };
  REGISTER: Omit<AccountInfo, 'token' | 'imageUrl'>;
  USER_INFO: null;
  COLLECT: {
    address: string;
    url: string;
  };
  PUBLISH: {
    title: string;
    body: any;
    supply: number;
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

import {
  AxiosRequestConfig,
  AxiosResponse,
  RawAxiosRequestHeaders,
} from 'axios';

import { AccountInfo, XummWallet } from '@/store/StoreTypes';
import { XummPkce } from '@/utils/window';

export interface AxiosClient {
  init: (baseUrl: string) => void;
  get: <T>(
    url: string,
    params?: object,
    options?: AxiosRequestConfig,
  ) => Promise<AxiosResponse<T, unknown>>;
  post: <T, K>(
    url: string,
    data: K,
    headers?: RawAxiosRequestHeaders,
    params?: object,
  ) => Promise<AxiosResponse<T, unknown>>;
  put: <T, K>(
    url: string,
    data: K,
    headers?: RawAxiosRequestHeaders,
  ) => Promise<AxiosResponse<T, unknown>>;
  patch: <T, K>(
    url: string,
    data: K,
    headers?: RawAxiosRequestHeaders,
    params?: object,
  ) => Promise<AxiosResponse<T, unknown>>;
  delete: <T, K>(
    url: string,
    data: K,
    headers?: RawAxiosRequestHeaders,
  ) => Promise<AxiosResponse<T, unknown>>;
  sendFormData: <T>(
    url: string,
    data: FormData,
    params?: object,
  ) => Promise<AxiosResponse<T, unknown>>;
}

export type AuthResponse = {
  jwt: string;
  me: XummWallet;
};

export type LoginResponse =
  | {
      adress: string;
      name: string;
      bio: string;
    }
  | number;

export type LoginRequest = {
  address: string;
};

export interface IProjectService {
  client: any;
  xumm: typeof XummPkce;
  axiosClient: AxiosClient;

  mint(wallet): Promise<void>;
  authorizeWithXumm(): Promise<AuthResponse>;
  // login(
  //   address: string,
  // ): Promise<AxiosResponse<LoginResponse, unknown> | string | null>;
}

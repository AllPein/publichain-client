import { History } from 'history';
import { AnyAction, Dispatch } from 'redux';

import { IProjectService } from '@/services/types';
import { ModalStore } from '@/store/Modal/ModalActions';
import { LoaderStore } from '@/store/loader/LoaderActions';
import { WebsocketStore } from '@/store/websocket/websocketActions';

import { UserStore } from './user/UserAction';

export interface RootState {
  user: UserStore;
  loader: LoaderStore;
  modal: ModalStore;
  websocket: WebsocketStore;
}

export type StoreDependencies = {
  projectService: IProjectService;
  history: History;
  dispatch: Dispatch<AnyAction>;
};

export type Wallet = {
  classicAdress: string;
  privateKey: string;
  publicKey: string;
  seed: string;
  adress: string;
};

export type XummWallet = {
  sub: string;
  picture: string;
  account: string;
  name?: string;
  domain?: string;
  blocked: boolean;
  source: string;
  kycApproved: boolean;
  proSubscription: boolean;
};

export type AccountInfo = {
  token: string;
  address: string;
  name: string;
  bio?: string;
};

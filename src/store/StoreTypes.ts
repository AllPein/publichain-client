import { History } from 'history';
import { AnyAction, Dispatch } from 'redux';

import { IProjectService } from '@/services/types';

import { UserStore } from './user/UserAction';

export interface RootState {
  user: UserStore;
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

export type AccountInfo = {
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

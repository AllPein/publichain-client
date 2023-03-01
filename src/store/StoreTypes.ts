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
  account_data: {
    Account: string;
    Balance: string;
    Flags: number;
    LedgerEntryType: string;
    OwnerCount: string;
    PreviousTxnID: string;
    PreviousTxnLgrSeq: number;
    Sequence: number;
    index: string;
  };
  ledger_hash: string;
  ledger_index: string;
  validate: boolean;
};

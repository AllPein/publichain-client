import actionCreatorFactory from 'typescript-fsa';

import { GetNftInfoPayload, NftState } from '@/types/nft';

const factory = actionCreatorFactory('nft');

export type NftStore = {
  nftInformation: NftState | null;
};

export const NftAction = {
  getNftInformation: factory<Omit<GetNftInfoPayload, 'name'>>(
    'INIT_GET_NFT_INFORMATION',
  ),
  setNftInformation: factory<NftState>('SET_NFT_INFORMATION'),
  resetState: factory('RESET_STATE'),
};

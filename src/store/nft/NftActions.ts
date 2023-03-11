import actionCreatorFactory from 'typescript-fsa';

import { GetNftInfoPayload, NftState } from '@/types/nft';

const factory = actionCreatorFactory('nft');

export type NftStore = {
  nftInformation: Record<string, NftState> | null;
};

export const NftAction = {
  getNftInformation: factory<GetNftInfoPayload>('INIT_GET_NFT_INFORMATION'),
  setNftInformation: factory<{ id: string; nftInfo: NftState }>(
    'SET_NFT_INFORMATION',
  ),
  resetState: factory('RESET_STATE'),
};

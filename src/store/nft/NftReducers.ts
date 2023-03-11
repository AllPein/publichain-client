import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { NftState } from '@/types/nft';

import { NftAction, NftStore } from './NftActions';

export const nftStoreInitialState: NftStore = Object.freeze({
  nftInformation: null,
});

export const NftReducers = reducerWithInitialState<NftStore>(
  nftStoreInitialState,
)
  .case(NftAction.setNftInformation, (state, nftInfo: NftState): NftStore => {
    return {
      ...state,
      nftInformation: nftInfo,
    };
  })
  .case(NftAction.resetState, () => {
    return {
      ...nftStoreInitialState,
    };
  });

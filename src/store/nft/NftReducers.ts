import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { NftAction, NftStore } from './NftActions';

export const nftStoreInitialState: NftStore = Object.freeze({
  nftInformation: null,
});

export const NftReducers = reducerWithInitialState<NftStore>(
  nftStoreInitialState,
)
  .case(NftAction.setNftInformation, (state, { id, nftInfo }): NftStore => {
    return {
      ...state,
      nftInformation: {
        ...state.nftInformation,
        [id]: nftInfo,
      },
    };
  })
  .case(NftAction.resetState, () => {
    return {
      ...nftStoreInitialState,
    };
  });

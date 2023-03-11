import { createSelector } from 'reselect';

import { RootState } from '../StoreTypes';

export const selectNftInformation = createSelector(
  (state: RootState) => state.nft.nftInformation,
  (nftInformation) => nftInformation,
);

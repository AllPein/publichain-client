import { createSelector } from 'reselect';

import { RootState } from '../StoreTypes';

export const selectRegisterModal = createSelector(
  (state: RootState) => state.modal.modals['register'],
  (modalData) => modalData,
);

export const selectLoginModal = createSelector(
  (state: RootState) => state.modal.modals['login'],
  (modalData) => modalData,
);

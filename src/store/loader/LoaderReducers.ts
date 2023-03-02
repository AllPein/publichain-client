import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { LoaderAction, LoaderStore, LoadingType } from './LoaderActions';

export const loaderStoreInitialState: LoaderStore = Object.freeze({
  loaded: {
    auth: false,
  },
  loading: {
    auth: false,
  },
});

export const LoaderReducers = reducerWithInitialState<LoaderStore>(
  loaderStoreInitialState,
)
  .case(LoaderAction.setLoading, (state, type: LoadingType): LoaderStore => {
    const cloneState = { ...state };

    cloneState.loaded[type] = false;
    cloneState.loading[type] = true;

    return cloneState;
  })
  .case(LoaderAction.setLoaded, (state, type: LoadingType): LoaderStore => {
    const cloneState = { ...state };

    cloneState.loaded[type] = true;
    cloneState.loading[type] = false;

    return cloneState;
  })
  .case(LoaderAction.resetType, (state, type: LoadingType): LoaderStore => {
    const cloneState = { ...state };

    cloneState.loaded[type] = false;
    cloneState.loading[type] = false;

    return cloneState;
  })
  .case(LoaderAction.resetStore, (): LoaderStore => {
    return { ...loaderStoreInitialState };
  });

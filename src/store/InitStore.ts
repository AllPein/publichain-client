import { routerMiddleware } from 'connected-react-router';
import {
  applyMiddleware,
  CombinedState,
  compose,
  createStore,
  Reducer,
  Store,
} from 'redux';
import thunk from 'redux-thunk';
import * as logger from 'redux-logger';
import actionCreatorFactory, { AnyAction } from 'typescript-fsa';

import appReducer from './Reducers';
import { RootState } from './StoreTypes';
import { history } from '@/utils/history';

const factory = actionCreatorFactory('root');

export const RootStoreAction = {
  resetStore: factory<RootState>('RESET_STORE'),
};

const configureStore = (): Store<CombinedState<RootState>, AnyAction> => {
  const middleware =
    process.env.NODE_ENV === 'development'
      ? [logger.createLogger(), routerMiddleware(history), thunk]
      : [routerMiddleware(history), thunk];

  /** В случае action RESET_STORE, возвращаем стору в изначальное состояние, оставляя только вебсокеты */

  const rootReducer = (
    state: CombinedState<RootState>,
    action: AnyAction,
  ): any => appReducer(state, action);

  const composeEnhancers =
    typeof window === 'object' &&
    // eslint-disable-next-line no-underscore-dangle
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? // eslint-disable-next-line no-underscore-dangle
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
        })
      : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
  );

  const store = createStore(
    rootReducer as Reducer<CombinedState<RootState>, AnyAction>,
    process.env.NODE_ENV === 'development'
      ? enhancer
      : applyMiddleware(...middleware),
  );

  return store;
};

const store = configureStore();

export const initialStoreState = store.getState();

export default store;

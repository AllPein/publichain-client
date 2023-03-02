/* eslint-disable import/no-cycle */
import { Epic } from 'redux-observable';
import { ignoreElements, tap } from 'rxjs/operators';
import { AnyAction } from 'typescript-fsa';

import { ofAction } from '@/operators/ofAction';
import { RootState, StoreDependencies } from '@/store/StoreTypes';
import { LoaderAction } from '@/store/loader/LoaderActions';
import { UserAction } from '@/store/user/UserAction';

export const handleInitRetrieveUser: Epic<
  AnyAction,
  AnyAction,
  RootState,
  StoreDependencies
> = (action$, state$, { dispatch }) =>
  action$.pipe(
    ofAction(UserAction.initRetrieveUser),
    tap((payload) => {
      if (payload.payload) {
        dispatch(UserAction.setIsLoggedIn(true));
      }
      dispatch(UserAction.setAccountInfo(payload.payload));
    }),
    tap(() => dispatch(LoaderAction.setLoaded('auth'))),
    ignoreElements(),
  );

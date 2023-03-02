/* eslint-disable import/no-cycle */
import { Epic } from 'redux-observable';
import { from } from 'rxjs';
import { ignoreElements, switchMap, tap } from 'rxjs/operators';
import { AnyAction } from 'typescript-fsa';

import { ofAction } from '@/operators/ofAction';
import { RootState, StoreDependencies, AccountInfo } from '@/store/StoreTypes';
import { UserAction } from '@/store/user/UserAction';

export const handleInitGetAccountInfo: Epic<
  AnyAction,
  AnyAction,
  RootState,
  StoreDependencies
> = (action$, state$, { projectService, dispatch }) =>
  action$.pipe(
    ofAction(UserAction.initConnect),
    switchMap(() => from(projectService.login())),
    tap((accountInfo: AccountInfo) => {
      if (accountInfo) {
        dispatch(UserAction.setIsLoggedIn(true));
      }
      dispatch(UserAction.setAccountInfo(accountInfo));
    }),
    ignoreElements(),
  );

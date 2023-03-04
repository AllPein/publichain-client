import { ofAction } from '@app/operators/OfAction';
import { AnyAction } from 'redux';
import { Epic } from 'redux-observable';
import { ignoreElements, tap } from 'rxjs/operators';

import { RootState, StoreDependencies } from '../StoreTypes';

import { NotifyActions } from './notifyActions';

const handleAppendAutocloseItem: Epic<
  AnyAction,
  AnyAction,
  RootState,
  StoreDependencies
> = (action$, state$, { dispatch }) =>
  action$.pipe(
    ofAction(NotifyActions.appendItem),
    tap(({ payload: notifyItem }) => {
      if (notifyItem.autoClose) {
        const timeToShow: number = (notifyItem.autoClose as number) * 1000;

        setTimeout(
          () => dispatch(NotifyActions.removeItem(notifyItem.key as string)),
          timeToShow,
        );
      }
    }),
    ignoreElements(),
  );

export const NotifyEpics = [handleAppendAutocloseItem];

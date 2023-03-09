import { Epic } from 'redux-observable';
import { from } from 'rxjs';
import { finalize, ignoreElements, switchMap, tap } from 'rxjs/operators';
import { AnyAction } from 'typescript-fsa';

import { ofAction } from '@/operators/ofAction';
import { projectService } from '@/services/ProjectService';
import { RootState, StoreDependencies } from '@/store/StoreTypes';
import { ArticleAction } from '@/store/article/ArticleActions';
import { LoaderAction } from '@/store/loader/LoaderActions';

export const handleInitGetArticles: Epic<
  AnyAction,
  AnyAction,
  RootState,
  StoreDependencies
> = (action$, state$, { dispatch }) =>
  action$.pipe(
    ofAction(ArticleAction.initGetArticles),
    tap(() => dispatch(LoaderAction.setLoading('articles'))),
    switchMap(() =>
      from(projectService.getArticles()).pipe(
        tap(({ data }) => {
          dispatch(ArticleAction.setArticles(data));
        }),
        finalize(() => dispatch(LoaderAction.setLoaded('articles'))),
      ),
    ),

    ignoreElements(),
  );

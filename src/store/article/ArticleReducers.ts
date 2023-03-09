import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { ArticleAction, ArticleStore } from './ArticleActions';

export const modalStoreInitialState: ArticleStore = Object.freeze({
  articles: [],
  currentArticle: null,
});

export const ArticleReducers = reducerWithInitialState<ArticleStore>(
  modalStoreInitialState,
)
  .case(ArticleAction.setArticles, (state, articles: any[]): ArticleStore => {
    return {
      ...state,
      articles,
    };
  })
  .case(
    ArticleAction.setCurrentArticle,
    (state, article: any): ArticleStore => {
      return {
        ...state,
        currentArticle: article,
      };
    },
  )
  .case(ArticleAction.resetState, () => {
    return {
      ...modalStoreInitialState,
    };
  });

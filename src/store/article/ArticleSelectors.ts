import { createSelector } from 'reselect';

import { RootState } from '../StoreTypes';

export const selectArticles = createSelector(
  (state: RootState) => state.article.articles,
  (articles) => articles,
);

export const selectArticleInfo = createSelector(
  (state: RootState) => state.article.currentArticle,
  (currentArticle) => currentArticle,
);

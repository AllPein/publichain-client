import actionCreatorFactory from 'typescript-fsa';

import { ArticleInfo, ShortArticle } from '@/types/ArticleTypes';

const factory = actionCreatorFactory('article');

export type ArticleStore = {
  articles: ShortArticle[];
  currentArticle: ArticleInfo | null;
};

export const ArticleAction = {
  initGetArticles: factory('INIT_GET_ARTICLES'),
  initGetArticleInfo: factory<string>('INIT_GET_ARTICLE_INFO'),
  setArticles: factory<ShortArticle[]>('SET_ARTICLES'),
  setCurrentArticle: factory<any>('SET_CURRENT_ARTICLE'),
  resetState: factory('RESET_STATE'),
};

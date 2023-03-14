import actionCreatorFactory from 'typescript-fsa';

import { ArticleInfo, ShortArticle } from '@/types/ArticleTypes';

const factory = actionCreatorFactory('article');

export type ArticleStore = {
  articles: ShortArticle[];
  currentArticle: ArticleInfo | null;
  myArticles: ShortArticle[];
  collectedArticles: ShortArticle[];
};

export const ArticleAction = {
  initGetArticles: factory('INIT_GET_ARTICLES'),
  initGetMyArticles: factory('INIT_GET_MY_ARTICLES'),
  initGetCollectedArticles: factory('INIT_GET_COLLECTED_ARTICLES'),
  initGetArticleInfo: factory<string>('INIT_GET_ARTICLE_INFO'),
  setArticles: factory<ShortArticle[]>('SET_ARTICLES'),
  setMyArticles: factory<ShortArticle[]>('SET_MY_ARTICLES'),
  setCollectedArticles: factory<ShortArticle[]>('SET_COLLECTED_ARTICLES'),
  setCurrentArticle: factory<any>('SET_CURRENT_ARTICLE'),
  resetState: factory('RESET_STATE'),
};

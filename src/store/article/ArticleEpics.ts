import { handleInitGetArticleInfo } from '@/store/article/epics/handleInitGetArticleInfoEpic';
import { handleInitGetArticles } from '@/store/article/epics/handleInitGetArticlesEpic';
import { handleInitGetCollectedArticles } from '@/store/article/epics/handleInitGetCollectedArticlesEpic';
import { handleInitGetMyArticles } from '@/store/article/epics/handleInitGetMyArticlesEpic';

export const ArticleEpics = [
  handleInitGetArticleInfo,
  handleInitGetArticles,
  handleInitGetMyArticles,
  handleInitGetCollectedArticles,
];

import { handleInitGetArticleInfo } from '@/store/article/epics/handleInitGetArticleInfoEpic';
import { handleInitGetArticles } from '@/store/article/epics/handleInitGetArticlesEpic';
import { handleInitGetCollectedArticles } from '@/store/article/epics/handleInitGetCollectedArticlesEpic';
import { handleInitGetMyArticles } from '@/store/article/epics/handleInitGetMyArticlesEpic';
import { handleReceiveMutateResult } from '@/store/article/epics/handleReceiveMutateResultEpic';
import { handleReceivePublishResult } from '@/store/article/epics/handleReceivePublishResultEpic';

export const ArticleEpics = [
  handleInitGetArticleInfo,
  handleInitGetArticles,
  handleInitGetMyArticles,
  handleReceivePublishResult,
  handleReceiveMutateResult,
  handleInitGetCollectedArticles,
];

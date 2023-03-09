import { handleInitGetArticleInfo } from '@/store/article/epics/handleInitGetArticleInfoEpic';
import { handleInitGetArticles } from '@/store/article/epics/handleInitGetArticlesEpic';

export const ArticleEpics = [handleInitGetArticleInfo, handleInitGetArticles];

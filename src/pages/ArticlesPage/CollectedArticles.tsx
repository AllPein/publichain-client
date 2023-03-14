import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Articles } from '@/components/Articles/Articles';
import { Loader } from '@/components/Loader/Loader';
import { useMount } from '@/hooks/useMount';
import { ArticleAction } from '@/store/article/ArticleActions';
import { selectCollectedArticles } from '@/store/article/ArticleSelectors';
import { selectArticlesLoading } from '@/store/loader/LoaderSelectors';
import { ShortArticle } from '@/types/ArticleTypes';

export const CollectedArticles = () => {
  const dispatch = useDispatch();
  const articles: ShortArticle[] = useSelector(selectCollectedArticles);
  const articlesLoading = useSelector(selectArticlesLoading);

  useMount(() => {
    dispatch(ArticleAction.initGetCollectedArticles());
  });

  return articlesLoading ? (
    <Loader centered />
  ) : (
    <Articles articles={articles} />
  );
};

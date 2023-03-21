import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Articles } from '@/components/Articles/Articles';
import { Loader } from '@/components/Loader/Loader';
import { useMount } from '@/hooks/useMount';
import { ArticleAction } from '@/store/article/ArticleActions';
import { selectArticles } from '@/store/article/ArticleSelectors';
import { selectArticlesLoading } from '@/store/loader/LoaderSelectors';
import { ArticleFilterType, ShortArticle } from '@/types/ArticleTypes';

export const ArticlesPage = () => {
  const dispatch = useDispatch();
  const articles: ShortArticle[] = useSelector(selectArticles);
  const articlesLoading = useSelector(selectArticlesLoading);

  useMount(() => {
    dispatch(
      ArticleAction.initSearchArticles({
        searchValue: '',
        type: ArticleFilterType.All,
      }),
    );
  });

  return articlesLoading ? (
    <Loader centered />
  ) : (
    <Articles articles={articles} type={ArticleFilterType.All} />
  );
};

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { ArticleInfo } from '@/components/ArticleInfo/ArticleInfo';
import { Loader } from '@/components/Loader/Loader';
import { useMount } from '@/hooks/useMount';
import { ArticleAction } from '@/store/article/ArticleActions';
import { selectArticleInfoLoading } from '@/store/loader/LoaderSelectors';

const ArticlePage: React.FC = () => {
  const dispatch = useDispatch();
  const { articleId }: { articleId: string } = useParams();

  const loading = useSelector(selectArticleInfoLoading);

  useMount(() => {
    dispatch(ArticleAction.initGetArticleInfo(articleId));
  });

  return loading ? <Loader size="s" centered /> : <ArticleInfo />;
};

export { ArticlePage };

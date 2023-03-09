import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ArticleCard } from '@/components/ArticleCard/ArticleCard';
import { useMount } from '@/hooks/useMount';
import { ArticleAction } from '@/store/article/ArticleActions';
import { selectArticles } from '@/store/article/ArticleSelectors';
import { ShortArticle } from '@/types/ArticleTypes';

export const ArticlesPage = () => {
  const dispatch = useDispatch();
  const articles: ShortArticle[] = useSelector(selectArticles);

  useMount(() => {
    dispatch(ArticleAction.initGetArticles());
  });
  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {articles.map((article) => (
          <ArticleCard key={article.internalUrl} {...article} />
        ))}
      </div>
    </div>
  );
};

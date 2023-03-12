import React, { FC } from 'react';

import { ArticleCard } from '@/components/ArticleCard/ArticleCard';
import { ShortArticle } from '@/types/ArticleTypes';

type ArticlesProps = {
  articles: ShortArticle[] | undefined;
};

export const Articles: FC<ArticlesProps> = ({ articles }) => {
  if (!articles) {
    return null;
  }

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

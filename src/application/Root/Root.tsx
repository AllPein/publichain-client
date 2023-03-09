import React, { Suspense } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import { ApplicationLayout } from '@/application/ApplicationLayout/ApplicationLayout';
import { Loader } from '@/components/Loader/Loader';
import { lazy } from '@/utils/lazy';

const ArticlesPage = lazy(
  () => import('@/pages/ArticlesPage/ArticlesPage'),
  'ArticlesPage',
);
const ArticlePage = lazy(
  () => import('@/pages/ArticlePage/ArticlePage'),
  'ArticlePage',
);
const CreateArticlePage = lazy(
  () => import('@/pages/CreateArticlePage/CreateArticlePage'),
  'CreateArticlePage',
);

const Root = () => {
  const renderRoot = () => (
    <ApplicationLayout>
      <Switch>
        <Redirect exact from="/" to="/explore" />
        <Route exact path="/explore">
          <ArticlesPage />
        </Route>
        <Route exact path="/article/:articleId">
          <ArticlePage />
        </Route>
        <Route exact path="/create-article">
          <CreateArticlePage />
        </Route>
      </Switch>
    </ApplicationLayout>
  );

  return (
    <Suspense fallback={<Loader centered size="s" />}>
      <Route path="/" render={renderRoot} />
    </Suspense>
  );
};

export { Root };

import React, { Suspense } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import { ApplicationLayout } from '@/application/ApplicationLayout/ApplicationLayout';
import { Loader } from '@/components/Loader/Loader';
import { lazy } from '@/utils/lazy';

const ArticlesPage = lazy(
  () => import('@/pages/ArticlesPage/ArticlesPage'),
  'ArticlesPage',
);

const MyArticlesPage = lazy(
  () => import('@/pages/ArticlesPage/MyArticles'),
  'MyArticlesPage',
);

const CollectedArticlesPage = lazy(
  () => import('@/pages/ArticlesPage/CollectedArticles'),
  'CollectedArticlesPage',
);

const ArticlePage = lazy(
  () => import('@/pages/ArticlePage/ArticlePage'),
  'ArticlePage',
);

const CreateArticlePage = lazy(
  () => import('@/pages/CreateArticlePage/CreateArticlePage'),
  'CreateArticlePage',
);

const AccountPage = lazy(
  () => import('@/pages/AccountPage/AccountPage'),
  'AccountPage',
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
        <Route exact path="/account">
          <AccountPage />
        </Route>
        <Route exact path="/my-articles">
          <MyArticlesPage />
        </Route>
        <Route exact path="/collected-articles">
          <CollectedArticlesPage />
        </Route>
        <Route exact path="/create-article">
          <CreateArticlePage />
        </Route>
      </Switch>
    </ApplicationLayout>
  );

  return (
    <Suspense fallback={<Loader centered />}>
      <Route path="/" render={renderRoot} />
    </Suspense>
  );
};

export { Root };

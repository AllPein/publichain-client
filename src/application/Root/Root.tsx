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
  'MyArticles',
);

const CollectedArticlesPage = lazy(
  () => import('@/pages/ArticlesPage/CollectedArticles'),
  'CollectedArticles',
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

const REDIRECT_PATH = '/explore';

const isLoggedIn = !!localStorage.getItem('token');

const routes = [
  {
    path: '/create-article',
    children: isLoggedIn ? (
      <CreateArticlePage />
    ) : (
      <Redirect to={REDIRECT_PATH} />
    ),
  },
  {
    path: '/article/:articleId',
    children: <ArticlePage />,
  },
  {
    path: '/explore',
    children: <ArticlesPage />,
  },
  {
    path: '/collected-articles',
    children: isLoggedIn ? (
      <CollectedArticlesPage />
    ) : (
      <Redirect to={REDIRECT_PATH} />
    ),
  },
  {
    path: '/my-articles',
    children: isLoggedIn ? <MyArticlesPage /> : <Redirect to={REDIRECT_PATH} />,
  },
  {
    path: '/account',
    children: isLoggedIn ? <AccountPage /> : <Redirect to={REDIRECT_PATH} />,
  },
  {
    path: '/edit/:articleId',
    children: isLoggedIn ? (
      <CreateArticlePage />
    ) : (
      <Redirect to={REDIRECT_PATH} />
    ),
  },
];

const Root = () => {
  const renderRoot = () => (
    <ApplicationLayout>
      <Switch>
        <Redirect exact from="/" to={REDIRECT_PATH} />
        {routes.map((route) => (
          <Route key={route.path} exact {...route} />
        ))}
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

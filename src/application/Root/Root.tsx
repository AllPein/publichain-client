import React, { Suspense } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import { ApplicationLayout } from '@/application/ApplicationLayout/ApplicationLayout';
import { CenteredSpin } from '@/components/Spin/CenteredSpin';
import { lazy } from '@/utils/lazy';

const VaultsPage = lazy(
  () => import('@/pages/VaultsPage/VaultsPage'),
  'VaultsPage',
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
          <VaultsPage />
        </Route>
        <Route exact path="/article/:id">
          <ArticlePage />
        </Route>
        <Route exact path="/create-article">
          <CreateArticlePage />
        </Route>
      </Switch>
    </ApplicationLayout>
  );

  return (
    <Suspense fallback={<CenteredSpin spinning />}>
      <Route path="/" render={renderRoot} />
    </Suspense>
  );
};

export { Root };

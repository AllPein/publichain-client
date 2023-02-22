import React, { Suspense } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { lazy } from '@/utils/lazy';
import { ApplicationLayout } from '@/application/ApplicationLayout/ApplicationLayout';
import { CenteredSpin } from '@/components/Spin/CenteredSpin';

const VaultsPage = lazy(
  () => import('@/pages/VaultsPage/VaultsPage'),
  'VaultsPage',
);
// const CollectionsPage = lazy(
//   () => import('@/pages/ProjectInfoPage/CollectionsPage'),
//   'CollectionsPage',
// );
// const VaultPage = lazy(
//   () => import('@/pages/VaultPage/VaultPage'),
//   'VaultPage',
// );

const Root = () => {
  const renderRoot = () => (
    <ApplicationLayout>
      <Switch>
        <Redirect exact from="/" to="/explore" />
        <Route exact path="/explore">
          <VaultsPage />
        </Route>
        <Route exact path="/collections">
          {/* <CollectionsPage /> */}
        </Route>
        <Route exact path="/vaults/:vaultId">
          {/* <VaultPage /> */}
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

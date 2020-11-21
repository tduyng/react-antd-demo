import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { PATH } from 'src/constants/paths';
import { Loading } from 'src/components/Loading';
const Home = lazy(() => import('src/pages/Home'));

export const HomeRoutes = () => {
  return (
    <Switch>
      <Route
        exact
        path={PATH.HOME}
        component={() => (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        )}
      />
    </Switch>
  );
};

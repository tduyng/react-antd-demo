import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { PATH } from 'src/constants/paths';
import { Loading } from 'src/components/Loading';
const MapPage = lazy(() => import('src/pages/Map'));

export const MapRoutes = () => {
  return (
    <Switch>
      <Route
        exact
        path={PATH.MAP}
        component={() => (
          <Suspense fallback={<Loading />}>
            <MapPage />
          </Suspense>
        )}
      />
    </Switch>
  );
};

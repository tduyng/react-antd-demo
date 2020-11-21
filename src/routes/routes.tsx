import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HomeRoutes } from './HomeRoutes';
import { MapRoutes } from './MapRoutes';
export const Routes = () => {
  return (
    <BrowserRouter>
      <HomeRoutes />
      <MapRoutes />
    </BrowserRouter>
  );
};

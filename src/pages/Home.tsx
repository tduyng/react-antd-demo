import React from 'react';
import 'src/assets/scss/home.scss';
import { MainLayout } from 'src/layouts/MainLayout';
import { LandingPage } from 'src/components/LandingPage';
import { IHelmet } from 'src/layouts/MainLayout';

const _HomePage = () => {
  const helmet: IHelmet = {
    isRoot: true,
    description: 'Demo using Ant design in React',
  };
  return (
    <MainLayout helmet={helmet}>
      <LandingPage />
    </MainLayout>
  );
};

const HomePage = React.memo(_HomePage);
export default HomePage;

import React from 'react';
import 'src/assets/scss/home.scss';
import { MainLayout } from 'src/layouts/MainLayout';
import { LandingPage } from 'src/components/LandingPage';

const _HomePage = () => {
  return (
    <MainLayout>
      <LandingPage />
    </MainLayout>
  );
};

const HomePage = React.memo(_HomePage);
export default HomePage;

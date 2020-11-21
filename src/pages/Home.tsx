import React from 'react';
import { Header } from 'src/components/Header';
import { Footer } from 'src/components/Footer';
import { LandingPage } from 'src/components/LandingPage';

const _HomePage = () => {
  return (
    <>
      <Header />
      <LandingPage />
      <Footer />
    </>
  );
};

const HomePage = React.memo(_HomePage);
export default HomePage;

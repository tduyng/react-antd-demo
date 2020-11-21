import React from 'react';

const _HomePage = () => {
  return (
    <div>
      <h1>Hi there!</h1>
    </div>
  );
};

const HomePage = React.memo(_HomePage);
export default HomePage;

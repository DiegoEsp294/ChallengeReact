import React from 'react';

  const LoadingScreen = ({}) => {
  return (
    <div class="text-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default LoadingScreen;
import React from 'react';

  const LoadingScreen = () => {
  return (
    <div className="text-center">
      <div className="spinner-border" role="status" style={{ color: '#DDDDDD' }}>
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default LoadingScreen;
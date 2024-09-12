'use client'

import NextNProgress from 'nextjs-progressbar';

const LoadingTop = () => {
  return (
    <NextNProgress
      color="#ee3d63"
      startPosition={0.3}
      stopDelayMs={200}
      height={3}
      showOnShallow={true}
    />
  );
};

export default LoadingTop;

import React from 'react';
import ContentLoader from "react-content-loader"

const SkeletonInput: React.FC = () => {
  return (
    <ContentLoader
      speed={2}
      width={300}
      height={38}
      viewBox="0 0 300 38"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="10" ry="10" width="300" height="38" />
    </ContentLoader>
  )
}

export default SkeletonInput;
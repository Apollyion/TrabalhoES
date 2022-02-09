import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";

export interface SpinnerLoaderProps {
  colorSpinner?: string;
  loading?: boolean;
  sizeSpinner?: number
}

const SpinnerLoader: React.FC<SpinnerLoaderProps> = ({
  colorSpinner = "#BBB8D9",
  loading,
  sizeSpinner = 19
}) => {
  return <ClipLoader color={colorSpinner} loading={loading} size={sizeSpinner} />
}

export default SpinnerLoader;
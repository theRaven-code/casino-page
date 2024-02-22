import React from "react";
import { SkeletonLoader, SkeletonLoaderContainer } from "./SkeletonLoaderStyles";



const SkeletonLoaderComponent: React.FC = () => (
  <SkeletonLoaderContainer>
    <SkeletonLoader />
  </SkeletonLoaderContainer>
);

export default SkeletonLoaderComponent;

import styled, { keyframes } from "styled-components";

export const loadingAnimation = keyframes`
  0% {
    background-position: -200%;
  }
  100% {
    background-position: 200%;
  }
`;

export const SkeletonLoaderContainer = styled.div`
  position: relative;
  overflow: hidden;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${loadingAnimation} 1.5s infinite;
`;

export const SkeletonLoader = styled.div`
  height: 100%;
  width: 100%;
`;
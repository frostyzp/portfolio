import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingSpinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  border: 3px solid #e0e0e0;
  border-top: 3px solid #333;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: 100;
  background: rgba(255, 255, 255, 0.8);
`;

const MediaContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const MediaWithLoading = ({ 
  type = 'img', 
  src, 
  alt, 
  className, 
  style,
  loading = 'lazy',
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Debug: Add a minimum loading time to see the spinner
  const [showSpinner, setShowSpinner] = useState(true);
  const mediaRef = useRef(null);

  useEffect(() => {
    setIsLoaded(false);
    setIsLoading(true);
  }, [src]);

  const handleLoad = () => {
    console.log('Image loaded:', src);
    setIsLoaded(true);
    // Add delay to see spinner
    setTimeout(() => {
      setIsLoading(false);
      setShowSpinner(false);
    }, 1000);
  };

  const handleLoadStart = () => {
    console.log('Load started:', src);
    setIsLoaded(false);
    setIsLoading(true);
    setShowSpinner(true);
  };

  const handleError = () => {
    console.log('Load error:', src);
    setIsLoaded(true);
    setIsLoading(false);
    setShowSpinner(false);
  };

  const handleCanPlay = () => {
    console.log('Video can play:', src);
    setIsLoaded(true);
    // Add delay to see spinner
    setTimeout(() => {
      setIsLoading(false);
      setShowSpinner(false);
    }, 1000);
  };

  const mediaStyle = {
    ...style,
    opacity: isLoaded ? 1 : 0,
    transition: 'opacity 0.3s ease',
    position: 'relative'
  };

  if (type === 'video') {
    return (
      <MediaContainer>
        <LoadingSpinner visible={showSpinner} />
        <video
          ref={mediaRef}
          src={src}
          className={className}
          style={mediaStyle}
          onLoadStart={handleLoadStart}
          onCanPlay={handleCanPlay}
          onError={handleError}
          {...props}
        />
      </MediaContainer>
    );
  }

  return (
    <MediaContainer>
      <LoadingSpinner visible={showSpinner} />
      <img
        ref={mediaRef}
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        style={mediaStyle}
        onLoad={handleLoad}
        onLoadStart={handleLoadStart}
        onError={handleError}
        {...props}
      />
    </MediaContainer>
  );
};

export default MediaWithLoading; 
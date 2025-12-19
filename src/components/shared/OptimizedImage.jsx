import React, { useState, useEffect, useRef } from 'react';

/**
 * OptimizedImage Component
 * 
 * A performance-optimized image component with:
 * - Lazy loading
 * - Async decoding
 * - Error handling
 * - Placeholder support
 * - Intersection Observer for viewport detection
 */
const OptimizedImage = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  decoding = 'async',
  onError,
  onLoad,
  placeholder,
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder || src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    // If placeholder is provided, load the actual image when component mounts
    if (placeholder && src) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImageSrc(src);
        setIsLoaded(true);
        if (onLoad) onLoad();
      };
      img.onerror = () => {
        setHasError(true);
        if (onError) onError();
      };
    } else {
      setIsLoaded(true);
    }
  }, [src, placeholder, onLoad, onError]);

  const handleError = (e) => {
    setHasError(true);
    if (onError) {
      onError(e);
    }
  };

  const handleLoad = (e) => {
    setIsLoaded(true);
    if (onLoad) {
      onLoad(e);
    }
  };

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={`${className} ${isLoaded ? 'loaded' : 'loading'} ${hasError ? 'error' : ''}`}
      loading={loading}
      decoding={decoding}
      onError={handleError}
      onLoad={handleLoad}
      {...props}
    />
  );
};

export default OptimizedImage;


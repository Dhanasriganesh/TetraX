import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

/**
 * LazyBackgroundImage Component
 * 
 * Optimizes background images by:
 * - Loading only when in viewport (for below-fold sections)
 * - Using proper image loading attributes
 * - Supporting immediate load for above-fold content
 */
const LazyBackgroundImage = ({
  src,
  children,
  className = '',
  style = {},
  immediate = false, // Set to true for hero sections (above fold)
  ...props
}) => {
  const [imageLoaded, setImageLoaded] = useState(immediate);
  const [imageSrc, setImageSrc] = useState(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    skip: immediate, // Skip intersection observer for immediate load
  });

  useEffect(() => {
    if (immediate || inView) {
      // Preload the image
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImageSrc(src);
        setImageLoaded(true);
      };
      img.onerror = () => {
        console.error(`Failed to load background image: ${src}`);
      };
    }
  }, [src, immediate, inView]);

  const backgroundStyle = {
    ...style,
    backgroundImage: imageLoaded && imageSrc ? `url(${imageSrc})` : 'none',
    backgroundSize: style.backgroundSize || 'cover',
    backgroundPosition: style.backgroundPosition || 'center',
    backgroundRepeat: style.backgroundRepeat || 'no-repeat',
  };

  return (
    <div
      ref={ref}
      className={className}
      style={backgroundStyle}
      {...props}
    >
      {children}
    </div>
  );
};

export default LazyBackgroundImage;


'use client';

import GLightbox from 'glightbox';
import { useEffect, useRef } from 'react';
import 'glightbox/dist/css/glightbox.min.css';
const GlightBox = ({
  children,
  href,
  ...other
}) => {
  const ref = useRef(null);
  useEffect(() => {
    let instance;
    if (ref.current) {
      instance = GLightbox({
        openEffect: 'fade',
        closeEffect: 'fade'
      });
    }
    return () => instance.destroy();
  });
  return <a ref={ref} href={href} {...other} className={`glightbox ${other['className']}`}>
      {children}
    </a>;
};
export default GlightBox;
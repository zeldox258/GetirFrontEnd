import { useCallback, useEffect, useState } from 'react';
import { tabletSize } from '../components/styles/mobile-query';

export function useMobile() {
  const [isMobile, setMobile] = useState(false);
  const detectDevice = useCallback(() => {
    const currentWidth = window.innerWidth;
    setMobile(currentWidth < tabletSize);
  }, []);
  useEffect(() => {
    window.addEventListener('resize', detectDevice);
    detectDevice();
    return () => window.removeEventListener('resize', detectDevice);
  }, [detectDevice]); 
  return isMobile;
}

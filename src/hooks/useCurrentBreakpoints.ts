import { tailwindConfig } from '@plugins/taillwind';
import { useMediaQuery } from 'react-responsive';

export const useIsXxl = (): boolean => {
  return useMediaQuery({
    query: `(max-width: ${tailwindConfig.theme.screens.xxl.max})`,
  });
};

export const useIsXl = (): boolean => {
  return useMediaQuery({
    query: `(max-width: ${tailwindConfig.theme.screens.xl.max})`,
  });
};

export const useIsLg = (): boolean => {
  return useMediaQuery({
    query: `(max-width: ${tailwindConfig.theme.screens.lg.max})`,
  });
};

export const useIsMd = (): boolean => {
  return useMediaQuery({
    query: `(max-width: ${tailwindConfig.theme.screens.md.max})`,
  });
};
export const useIsMobileMd = (): boolean => {
  return useMediaQuery({
    query: `(max-width: ${tailwindConfig.theme.screens.lessMd.max})`,
  });
};

export const useIsSm = (): boolean => {
  return useMediaQuery({
    query: `(max-width: ${tailwindConfig.theme.screens.sm.max})`,
  });
};

import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '@tailwind';
import { useMediaQuery } from 'react-responsive';

interface IBreakpoints {
  isXxl: boolean;
  isXl: boolean;
  isLg: boolean;
  isMd: boolean;
  isSM: boolean;
}

const fullConfig = resolveConfig(tailwindConfig);

export const useCurrentBreakpoints = (): IBreakpoints => {
  const isXxl = useMediaQuery({
    query: `(max-width: ${fullConfig.theme.screens.xxl.max})`,
  });
  const isXl = useMediaQuery({
    query: `(max-width: ${fullConfig.theme.screens.xl.max})`,
  });
  const isLg = useMediaQuery({
    query: `(max-width: ${fullConfig.theme.screens.lg.max})`,
  });
  const isMd = useMediaQuery({
    query: `(max-width: ${fullConfig.theme.screens.md.max})`,
  });
  const isSM = useMediaQuery({
    query: `(max-width: ${fullConfig.theme.screens.sm.max})`,
  });

  return { isXxl, isXl, isLg, isMd, isSM };
};

/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { theme } from 'twin.macro'
  

type ScreenSizes = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

const generateMin = (pixels: string) => `@media (min-width: ${pixels})`;
const generateMax = (pixels: string) => `@media (max-width: ${pixels})`;

export const xs: string = generateMin(theme`screens.xs`);
export const sm: string = generateMin(theme`screens.sm`);
export const md: string = generateMin(theme`screens.md`);
export const lg: string = generateMin(theme`screens.lg`);
export const xl: string = generateMin(theme`screens.xl`);
export const xxl: string = generateMin(theme`screens.xxl`);

export const min: Record<ScreenSizes, string> = {
  xs: generateMin(theme`screens.xs`),
  sm: generateMin(theme`screens.sm`),
  md: generateMin(theme`screens.md`),
  lg: generateMin(theme`screens.lg`),
  xl: generateMin(theme`screens.xl`),
  xxl: generateMin(theme`screens.xxl`),
};

export const max: Record<ScreenSizes, string> = {
    xs: generateMax(`${(parseInt(theme`screens.xs`.slice(0, -2)) - 1) as number}px`),
    sm: generateMax(`${(parseInt(theme`screens.sm`.slice(0, -2)) - 1) as number}px`),
    md: generateMax(`${(parseInt(theme`screens.md`.slice(0, -2)) - 1) as number}px`),
    lg: generateMax(`${(parseInt(theme`screens.lg`.slice(0, -2)) - 1) as number}px`),
    xl: generateMax(`${(parseInt(theme`screens.xl`.slice(0, -2)) - 1) as number}px`),
    xxl: generateMax(`${(parseInt(theme`screens.xxl`.slice(0, -2)) - 1) as number}px`),
  };
  
/* eslint-disable @typescript-eslint/ban-types */
import { createGlobalStyle} from 'styled-components';
import type { DefaultTheme, GlobalStyleComponent, ThemeProps, Interpolation } from 'styled-components';
import tw, { theme } from 'twin.macro';


export const fluid = (min: number, max: number ): Interpolation<ThemeProps<DefaultTheme>> => {
  const minVw = parseInt(theme`screens.xs`.slice(0, -2), 10)
  const maxVw = parseInt(theme`screens.xxl`.slice(0, -2), 10)
  const minQuery = `@media screen and (min-width: ${minVw}px)`
  const maxQuery = `@media screen and (min-width: ${maxVw}px)`
  return {
    fontSize: `${min}px`,
    [minQuery]: {
      fontSize: `calc(${min}px + ${max - min} * ((100vw - ${minVw}px) / ${maxVw - minVw - 1}))`,
    },
    [maxQuery]: {
      fontSize: `${max}px`,
    },
  }
}

export const remToPx = (rem: string) => Number(rem.slice(0, -3)) * 16

const GlobalStyles: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
  :root {
    --foreground-rgb: 0, 0, 0;
    --background-start-rgb: 214, 219, 220;
    --background-end-rgb: 255, 255, 255;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --foreground-rgb: 255, 255, 255;
      --background-start-rgb: 0, 0, 0;
      --background-end-rgb: 0, 0, 0;
    }
  }

  body {
    color: rgb(var(--foreground-rgb));
    background: linear-gradient(
        to bottom,
        transparent,
        rgb(var(--background-end-rgb))
      )
      rgb(var(--background-start-rgb));
  }
  html {
    font-size: 16px;
  }
  body {
    ${tw`text-primary-500 tracking-lg leading-mobile-lg lg:leading-lg`}
  }
  b,
  strong {
    ${tw`font-bold`}
  }
  h1 {
    ${tw`font-light tracking-h1 leading-mobile-h1 lg:leading-h1`}
    ${fluid(remToPx(theme`fontSize.mobile-5xl`), remToPx(theme`fontSize.6xl`))}
  }
  h2 {
    ${tw`font-light tracking-h2 leading-mobile-h2 lg:leading-h2`}
    ${fluid(remToPx(theme`fontSize.mobile-4xl`), remToPx(theme`fontSize.5xl`))}
  }
  h3 {
    ${tw`font-bold tracking-h3 leading-mobile-h3 lg:leading-h3`}
    ${fluid(remToPx(theme`fontSize.mobile-3xl`), remToPx(theme`fontSize.4xl`))}
  }
  h4 {
    ${tw`font-bold tracking-h4 leading-mobile-h4 lg:leading-h4`}
    ${fluid(remToPx(theme`fontSize.mobile-2xl`), remToPx(theme`fontSize.3xl`))}
  }
  h5 {
    ${tw`font-bold tracking-h5 leading-mobile-h5 lg:leading-h5`}
    ${fluid(remToPx(theme`fontSize.mobile-xl`), remToPx(theme`fontSize.2xl`))}
  }
  h6 {
    ${tw`font-bold tracking-h6 leading-mobile-h6 lg:leading-h6`}
    ${fluid(remToPx(theme`fontSize.mobile-lg`), remToPx(theme`fontSize.xl`))}
  }
  p{
    ${fluid(remToPx(theme`fontSize.base`), remToPx(theme`fontSize.3xl`))}
  }
  div{
    ${fluid(remToPx(theme`fontSize.base`), remToPx(theme`fontSize.3xl`))}
  }
`;

export const Container = tw.div`
  flex
  min-h-screen
  flex-col
  items-center
  justify-center
  py-2
`;

export const Main = tw.main`
  flex
  flex-col
  min-h-screen
  items-center
  justify-between
  p-24
`;

export default GlobalStyles;

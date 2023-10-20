/* eslint-disable no-undef */
import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export const fluid = (min, max) => {
  const minVw = parseInt(theme["screens"]["xs"]?.slice(0, -2), 10);
  const maxVw = parseInt(theme["screens"]["xxl"]?.slice(0, -2), 10);
  const minQuery = `@media screen and (min-width: ${minVw}px)`;
  const maxQuery = `@media screen and (min-width: ${maxVw}px)`;
  return {
    fontSize: `${min}px`,
    [minQuery]: {
      fontSize: `calc(${min}px + ${max - min} * ((100vw - ${minVw}px) / ${
        maxVw - minVw - 1
      }))`,
    },
    [maxQuery]: {
      fontSize: `${max}px`,
    },
  };
};

export const remToPx = (rem) => Number(rem?.slice(0, -3)) * 16;

const GlobalStyles = createGlobalStyle`
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
    background: #eee;
  }
  html {
    font-size: 16px;
  }
  body {
    letter-spacing: 0.0025em;
    line-height: 1.78; 
    @media screen and (min-width: 1024px) {
      line-height: 1.6; 
    }
  }
  b,
  strong {
    font-weight: 700;
  }
  h1 {
    font-weight: 700;
    letter-spacing: -0.015em;
    line-height: 1.24; 
    // font-size: 64px;
    @media screen and (min-width: 1024px) {
      line-height:1.09; 
    }
    ${fluid(remToPx(theme["fontSize"]["mobile-4xl"]), remToPx(theme["fontSize"]["mobile-7xl"]))}
  }
  h2 {
    font-weight: 700;
    letter-spacing: -0.005em;
    line-height: 1.37;
    @media screen and (min-width: 1024px) {
      line-height:1.37; 
    }
    ${fluid(remToPx(theme["fontSize"]["mobile-4xl"]), remToPx(theme["fontSize"]["5xl"]))}
  }
  h3 {

    font-weight: 700;
    letter-spacing: 0em;
    line-height: 1.43;
    @media screen and (min-width: 1024px) {
      line-height:1.33; 
    }
    ${fluid(remToPx(theme["fontSize"]["mobile-3xl"]), remToPx(theme["fontSize"]["4xl"]))}

  }
  h4 {

    font-weight: 700;
    letter-spacing: 0.0025em;
    line-height: 1.33;
    @media screen and (min-width: 1024px) {
      line-height:1.25; 
    }
    ${fluid(remToPx(theme["fontSize"]["mobile-2xl"]), remToPx(theme["fontSize"]["3xl"]))}

  }
  h5 {
    font-weight: 700;
    letter-spacing: 0em;
    line-height: 1.40;
    @media screen and (min-width: 1024px) {
      line-height:1.33; 
    }
    ${fluid(remToPx(theme["fontSize"]["mobile-xl"]), remToPx(theme["fontSize"]["2xl"]))}

  }
  h6 {
    font-weight: 700;
    letter-spacing: 0.0025em;
    line-height: 1.78;
    @media screen and (min-width: 1024px) {
      line-height:1.4; 
    }
    ${fluid(remToPx(theme["fontSize"]["mobile-lg"]), remToPx(theme["fontSize"]["xl"]))}
  }
  p{
    ${fluid(remToPx(theme["fontSize"]["base"]), remToPx(theme["fontSize"]["2xl"]))}
  }
  div{
    ${fluid(remToPx(theme["fontSize"]["base"]), remToPx(theme["fontSize"]["xl"]))}
  }
  nav ul li{
    ${fluid(remToPx(theme["fontSize"]["base"]), remToPx(theme["fontSize"]["2xl"]))}
  }
  aside ul li{
    ${fluid(remToPx(theme["fontSize"]["base"]), remToPx(theme["fontSize"]["lg"]))}
  }
`;

// export const Container = tw.div`
//   flex
//   min-h-screen
//   flex-col
//   items-center
//   justify-center
//   py-2
// `;

// export const Main = tw(main)`
//   flex
//   flex-col
//   min-h-screen
//   items-center
//   justify-between
//   p-24
// `;

export default GlobalStyles;



// const GlobalStyles = createGlobalStyle`
//   h1 {
//     font-weight: 700;
//     letter-spacing: -0.015em;
//     line-height: 1.24; 
//     @media screen and (min-width: 1024px) {
//       line-height:1.09; 
//     }

//     // ${fluid(remToPx(theme`fontSize.mobile-5xl`), remToPx(theme`fontSize.6xl`))}
//   }
//   h2 {
//     font-weight: 700;
//     letter-spacing: -0.005em;
//     line-height: 1.37;
//     @media screen and (min-width: 1024px) {
//       line-height:1.37; 
//     }
//     // ${fluid(remToPx(theme`fontSize.mobile-4xl`), remToPx(theme`fontSize.5xl`))}
//   }
//   h3 {

//     font-weight: 700;
//     letter-spacing: 0em;
//     line-height: 1.43;
//     @media screen and (min-width: 1024px) {
//       line-height:1.33; 
//     }

//     // ${fluid(remToPx(theme`fontSize.mobile-3xl`), remToPx(theme`fontSize.4xl`))}
//   }
//   h4 {

//     font-weight: 700;
//     letter-spacing: 0.0025em;
//     line-height: 1.33;
//     @media screen and (min-width: 1024px) {
//       line-height:1.25; 
//     }

//     // ${fluid(remToPx(theme`fontSize.mobile-2xl`), remToPx(theme`fontSize.3xl`))}
//   }
//   h5 {
//     font-weight: 700;
//     letter-spacing: 0em;
//     line-height: 1.40;
//     @media screen and (min-width: 1024px) {
//       line-height:1.33; 
//     }

//     // ${fluid(remToPx(theme`fontSize.mobile-xl`), remToPx(theme`fontSize.2xl`))}
//   }
//   h6 {

//     font-weight: 700;
//     letter-spacing: 0.0025em;
//     line-height: 1.78;
//     @media screen and (min-width: 1024px) {
//       line-height:1.4; 
//     }

//     // ${fluid(remToPx(theme`fontSize.mobile-lg`), remToPx(theme`fontSize.xl`))}
//   }
//   p{
//     // ${fluid(remToPx(theme`fontSize.base`), remToPx(theme`fontSize.2xl`))}
//   }
//   div{
//     // ${fluid(remToPx(theme`fontSize.base`), remToPx(theme`fontSize.xl`))}
//   }
//   nav ul li {
//     // ${fluid(remToPx(theme`fontSize.base`), remToPx(theme`fontSize.2xl`))}
//   }
//   aside ul li {
//     // ${fluid(remToPx(theme`fontSize.base`), remToPx(theme`fontSize.lg`))}
//   }
//   html a:visited, html a:visited > * {
//     color: inherit !important;
//   }
//   html[native-dark-active] .bg-secondary-500 {
//     background-color: grey;
//   }
// `;



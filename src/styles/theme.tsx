/**
 * Created on Wed Apr 10 2019
 * Copyright (c) 2019 Starky's club
 * @author VĂĄclav Brzezina
 */

import { rem } from "polished";
import * as styledComponents from "styled-components";

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  withTheme
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
>;

export interface IThemeInterface {
  colors: {
    primary: string;
    secondary: string;
    success: string;
    danger: string;
    warning: string;
    info: string;
    text: string;
    green: string;
    red: string;
    blue: string;
    semiGreen: string;
    semiRed: string;
    lightGreen: string;
    lightRed: string;
    yellow: string;
    orange: string;
    gray: string;
    lightGray: string;
    darkGray: string;
    light: string;
    white: string;
  };
  fonts: {
    default: string;
  };
  fontWeights: {
    textLight: number;
    textRegular: number;
    textBold: number;
  };
  fontSizes: {
    textBase: string;
    textSmall: string;
    textMedium: string;
    textBig: string;
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
  };
  lineHeights: {
    textBase: number;
    textSmall: number;
    textMedium: number;
    textBig: number;
    h1: number;
    h2: number;
    h3: number;
    h4: number;
    h5: number;
  };
  borderRadius: string;
}

export const theme: IThemeInterface = {
  colors: {
    primary: "#2F80ED",
    secondary: "#C7C7C7",
    success: "#32D172",
    danger: "#FF7474",
    warning: "#F2994A",
    info: "#5BA1FF",
    text: "#2E2E2E",
    green: "#32D172",
    red: "#FF7474",
    blue: "#5BA1FF",
    semiGreen: "#32d17266",
    semiRed: "#F37272",
    lightGreen: "#D8FFE8",
    lightRed: "#FFE8E8",
    yellow: "#F5DC6D",
    orange: "#F2994A",
    gray: "#E8E8E8",
    lightGray: "#F4F4F4",
    darkGray: "#111",
    light: "#F8FAFD",
    white: "#fff"
  },
  fonts: {
    default: "Open Sans"
  },
  fontWeights: {
    textLight: 300,
    textRegular: 400,
    textBold: 600
  },
  fontSizes: {
    textBase: rem("13px"),
    textSmall: rem("11px"),
    textMedium: rem("18px"),
    textBig: rem("22px"),
    h1: rem("70px"),
    h2: rem("48px"),
    h3: rem("36px"),
    h4: rem("24px"),
    h5: rem("20px")
  },
  lineHeights: {
    textBase: 1.2,
    textSmall: 1,
    textMedium: 1.1,
    textBig: 1.4,
    h1: 1.5,
    h2: 1.4,
    h3: 1.3,
    h4: 1.2,
    h5: 1.2
  },
  borderRadius: rem("5px")
};

export default styled;
export { css, createGlobalStyle, keyframes, ThemeProvider, withTheme };

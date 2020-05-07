import * as styledComponents from "styled-components";

const {
  default: styled,
  css,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  TypeTheme
>;

type TypeTheme = typeof theme;

export const theme = {
  colors: {
    main: "darkslategray",
    secondary: "black",
    primary: "royalblue",
    success: "limegreen",
    error: "crimson",
    disabled: "darkgrey",
    main_hover: "lightslategray",
    secondary_hover: "darkgray",
    primary_hover: "cornflowerblue",
    success_hover: "lightgreen",
    error_hover: "crlightcoralimson",
    link_hover: "#234161"
  },

  breakPoints: {
    lg: "1024px",
    xl: "1440px"
  },

  borders: {
    main: "1px solid darkslategray",
    main_hover: "1px solid lightslategray"
  },

  fonts: {
    size_text: "16px",
    size_h1: "24px",
    size_h2: "20px"
  }
};

export { css, ThemeProvider };
export default styled;

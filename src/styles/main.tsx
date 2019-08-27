import { css } from "./theme";

export const main = css`
  /*Global styles*/
  body {
    margin: 0;
    padding: 0;
    @import url("https://fonts.googleapis.com/css?family=Muli|Open+Sans&display=swap");
    font-family: "Muli", sans-serif;
  }

  .container-fluid {
    padding: 0 !important;
  }

  /*All Main Sections*/
  .what-we-do {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.darkGreen};
    padding: 2rem 0;

    @media ${props => props.theme.screen.laptop} {
      padding: 7rem 0;
    }
  }
`;

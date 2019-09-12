import { css, theme } from "./theme";

export const main = css`
  /*Global styles*/
  body {
    margin: 0;
    padding: 0;
    font-family: "Muli", sans-serif;
    font-size: 16px;
  }

  h1 {
    font-style: normal;
    font-weight: 800;
    font-size: ${theme.fontSizes.h1};
    line-height: 128%;
    letter-spacing: 0.03em;
    text-align: center;
  }

  h2 {
    font-size: ${theme.fontSizes.h2};
  }

  h3 {
    font-size: ${theme.fontSizes.h3};
  }

  h4 {
    font-size: ${theme.fontSizes.h4};
  }

  h5 {
    font-size: ${theme.fontSizes.h5};
  }

  .container {
    @media ${theme.screen.laptopL} {
      width: 1410px !important;
      max-width: 1410px !important;
    }
  }

  h1 {
    @media ${theme.screen.laptop} {
      text-align: left;
    }
  }

  section {
    padding: 2rem 0;

    @media ${theme.screen.laptop} {
      padding: 7.5rem 0;
    }

    .section-row {
      @media ${theme.screen.laptop} {
        margin-top: 95px;
      }
    }
  }

  .flex-row-reverse {
    flex-direction: row-reverse;
  }

  .text-align-right {
    text-align: right;
  }
`;

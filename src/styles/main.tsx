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
    font-size: 35px;
    line-height: 128%;
    letter-spacing: 0.03em;
    text-align: center;

    @media ${theme.screen.laptop} {
      text-align: left;
      font-size: 46px;
    }

    @media ${theme.screen.laptopL} {
      text-align: left;
      font-size: ${theme.fontSizes.h1};
    }
  }

  h2 {
    font-size: ${theme.fontSizes.h2};

    @media ${theme.screen.laptopL} {
      text-align: left;
      font-size: ${theme.fontSizes.h1};
    }
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
    padding: 0 2rem !important;

    @media ${theme.screen.laptopL} {
      width: 1410px !important;
      max-width: 1410px !important;
    }
  }

  section {
    padding: 2rem 0;

    @media ${theme.screen.laptopL} {
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

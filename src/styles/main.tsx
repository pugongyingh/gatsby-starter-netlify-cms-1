import { css } from "./theme";

export const main = css`
  /*Global styles*/
  body {
    margin: 0;
    padding: 0;
    font-family: "Muli", sans-serif;
  }

  h1 {
    font-style: normal;
    font-weight: 800;
    font-size: 28px;
    line-height: 128%;
    letter-spacing: 0.03em;
  }

  .container {
    @media ${props => props.theme.screen.laptop} {
      width: 1410px !important;
    }
  }

  .container-fluid {
    padding: 0 !important;
  }

  .row {
    margin: 0;
  }

  .col-xs-12 {
    padding: 0 !important;
  }

  section {
    padding: 2rem 0;

    @media ${props => props.theme.screen.laptop} {
      padding: 7.5rem 0;
    }

    .row {
      @media ${props => props.theme.screen.laptop} {
        margin-top: 95px;
      }
    }
  }
`;

import { css } from "./theme";

export const main = css`
  /*Global styles*/
  body {
    margin: 0;
    padding: 0;
    @import url("https://fonts.googleapis.com/css?family=Muli:400,700|Open+Sans:400,700,800&display=swap");
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

  /*All Main Sections*/
  .what-we-do {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.darkGreen};

    h1 {
      &:nth-child(2) {
        font-size: 3.5rem;
        font-weight: bold;
        max-width: 50%;
      }
    }

    p {
      font-family: "Open Sans", sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 27px;
      letter-spacing: 0.03em;
    }
  }

  .references {
    .container {
      max-width: 1050px;
    }

    img {
      @media ${props => props.theme.screen.laptop} {
        width: 450px;
        height: 580px;
      }
    }

    p {
      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 170%;
      letter-spacing: 0.03em;
      color: ${props => props.theme.colors.paragraphGrey};
      max-width: 480px;
    }

    .ref-content {
      @media ${props => props.theme.screen.laptop} {
        padding: 2rem 0;

        h2 {
          font-family: Open Sans;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 150.5%;
          letter-spacing: 0.03em;
        }

        h3 {
          font-family: Muli;
          font-style: normal;
          font-weight: 800;
          font-size: 36px;
          line-height: 143%;
          letter-spacing: 0.03em;
        }
      }
    }
  }

  .technologies {
    border: 1px solid red;
  }
`;

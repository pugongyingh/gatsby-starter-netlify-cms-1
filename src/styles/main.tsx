import { css } from "./theme";

export const main = css`
  /*Global styles*/
  body {
    margin: 0;
    padding: 0;
    @import url("https://fonts.googleapis.com/css?family=Muli:400,700|Open+Sans:400,700,800&display=swap");
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

    .row {
      @media ${props => props.theme.screen.laptop} {
        margin-top: 70px;
      }
    }

    @media ${props => props.theme.screen.laptop} {
      padding: 7rem 0;
    }
  }

  .technologies {
    border: 1px solid red;
  }
`;

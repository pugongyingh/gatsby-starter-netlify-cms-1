import React from "react";
import Button from "../../components/Button";
import { Maybe } from "../../graphql/types";
import styled, { SCP } from "../../styles/theme";

interface FormProps extends SCP {
  locale: Maybe<string>;
}

const ContactForm: React.FC<FormProps> = ({ className, locale }) => {
  return (
    <form
      className={className}
      name="contact"
      method="POST"
      data-netlify="true"
      action="/pages/Success"
    >
      <input type="hidden" name="form-name" value="contact" />
      <label className="rfe-form__row">
        <label htmlFor="name">
          {locale === "cs" ? "Vaše jméno" : "Your name"}
        </label>
        <input type="text" name="name" required={true} />
      </label>
      <div className="rfe-form__row">
        <label>{locale === "cs" ? "Váš email" : "Your email"}</label>
        <input type="email" name="email" required={true} />
      </div>
      <div className="rfe-form__row">
        <label>{locale === "cs" ? "Vaše zpráva" : "Your message"}</label>
        <textarea name="message" required={true}/>
      </div>
      {/* <div data-netlify-recaptcha="true" /> */}
      <div className="form-btn-wrap">
        {/* <button type="submit">{locale === "cs" ? "Odeslat" : "Send"}</button> */}
        <Button
          type="submit"
          height="44px"
          className="form-btn-wrap__cta"
          background="#1B2631"
        >
          {locale === "cs" ? "Odeslat" : "Send"}
        </Button>
      </div>
    </form>
  );
};

const StyledContactForm = styled(ContactForm)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media ${props => props.theme.screen.laptop} {
    max-width: 570px;
  }

  .rfe-form__row {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    margin-bottom: 20px;

    input {
      height: 38px;
      outline: none;
      border: 1px solid ${props => props.theme.colors.inputBorder};
      box-sizing: border-box;
      border-radius: 1px;
      font-size: 20px;
    }
  }

  label {
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 35px;
    color: #1c2b3b;
    margin-bottom: 10px;
  }

  textarea {
    resize: none;
    height: 181px;

    border: 1px solid ${props => props.theme.colors.inputBorder};
    box-sizing: border-box;
    border-radius: 1px;
    outline: none;
    margin-bottom: 20px;
    font-size: 20px;

    &:invalid {
      box-shadow: none;
    }

    /* &:required {
      box-shadow: none;
    } */
  }

  .form-btn-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media ${props => props.theme.screen.laptop} {
      justify-content: flex-end;
    }

    &__cta:hover {
      background: ${props => props.theme.colors.contactBtnGrey} !important;
    }
  }
`;

export default StyledContactForm;

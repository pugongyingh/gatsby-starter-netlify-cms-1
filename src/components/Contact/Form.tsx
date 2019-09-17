import React from "react";
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
      data-netlify-recaptcha="true"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="rfe-form__row">
        <label>{locale === "cs" ? "Vaše jméno" : "Name"}: </label>
        <input type="text" name="name" required={true}/>
      </div>
      <div className="rfe-form__row">
        <label>{locale === "cs" ? "Váš email" : "Email"}: </label>
        <input type="email" name="email" required={true}/>
      </div>
      <div className="rfe-form__row">
        <label>{locale === "cs" ? "Váše zpráva" : "Your message"}: </label>
        <textarea name="message" required={true}/>
      </div>
      <div data-netlify-recaptcha="true" />
      <div className="form-btn-wrap">
        <button type="submit">{locale === "cs" ? "Odeslat" : "Send"}</button>
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
      font-size: 18px;
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
  }

  .form-btn-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;

    button {
      width: 197px;
      height: 44px;
      background: linear-gradient(252.14deg, #1b2631 -2.02%, #212f3f 103.08%);
      border-radius: 1px;
      color: ${props => props.theme.colors.white};
      outline: none;
      cursor: pointer;
      font-size: 18px;

      &:hover {
        background: #293d4c;
      }
    }
  }
`;

export default StyledContactForm;

import React from "react";
import {
  Button,
  EmailInput,
  Form,
  TextArea,
  TextInput
} from "react-form-elements";
import styled, { SCP } from "../../styles/theme";

interface FormProps extends SCP {}

const ContactForm: React.FC<FormProps> = ({ className }) => {
  return (
    <Form action="/" className={className}>
      <TextInput label="Name" name="name" />
      <EmailInput label="Email" name="email" />
      <TextArea label="Your message" name="text-area" />
      <div className="form-btn-wrap">
        <Button>Send</Button>
      </div>
    </Form>
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
    }
  }
`;

export default StyledContactForm;

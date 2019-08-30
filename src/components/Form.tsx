import React from "react";
import styled from "../styles/theme";

interface FormProps {}

const Form = styled.form`
  box-shadow: 0 2px 5px #f5f5f5;
  background: #f5f5f5;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 570px;
`;

const form: React.FC<FormProps> = () => {
  return (
    <Form action="/">
      <div class="info">
        <label for="name">Name</label>
        <input class="fname" type="text" name="name" />
        <label for="name">Email</label>
        <input type="text" name="name" />
      </div>
      <p>Message</p>
      <div>
        <textarea rows="4" />
      </div>
      <button type="submit" href="/">
        Submit
      </button>
    </Form>
  );
};

export default form;

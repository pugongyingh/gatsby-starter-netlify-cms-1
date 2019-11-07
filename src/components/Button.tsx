import React from "react";
import styled from "../styles/theme";

interface Props {
  background: string;
  height: string;
  className: string;
  type: any;
}

const StyledBtn = styled.button`
  width: 197px;
  border-color: transparent;
  color: ${props => props.theme.colors.white};
  font-size: 18px;
  cursor: pointer;
  outline: none;
  border-radius: 3px;

  &.header__cta.capital {
    text-transform: capitalize;
  }

  &.header__cta:hover {
    background: ${props => props.theme.colors.mustard} !important;
  }
`;

const Button: React.FC<Props> = ({
  background,
  height,
  children,
  className,
  type
}) => {
  return (
    <StyledBtn
      className={className}
      style={{
        background,
        height
      }}
      type={type}
    >
      {children}
    </StyledBtn>
  );
};

export default Button;

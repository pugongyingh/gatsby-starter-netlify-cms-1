import React from "react";
import styled from "styled-components";
import arrowIconDark from "../img/arrow-icon-dark.svg";
import arrowIcon from "../img/right-arrow-icon.svg";

interface ArrowBtnProps {
  altText: string;
  leftArrow: boolean;
  dark: boolean;
  onClick?: any;
}

const StyledBtn = styled.div`
  width: 52px;
  height: 52px;
  border: 1px solid ${props => props.theme.colors.white};
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &.left-arrow {
    margin-right: 20px;
    img {
      transform: rotate(-180deg);
    }
  }

  &.dark {
    border: 1px solid ${props => props.theme.colors.black};
  }
`;

const ArrowButton: React.FC<ArrowBtnProps> = ({
  altText,
  leftArrow,
  dark,
  onClick
}) => {
  const classes = [];

  if (leftArrow) {
    classes.push("left-arrow");
  }

  if (dark) {
    classes.push("dark");
  }

  return (
    <StyledBtn className={classes.join(" ")} onClick={onClick}>
      <img src={dark ? arrowIconDark : arrowIcon} alt={altText} />
    </StyledBtn>
  );
};

export default ArrowButton;

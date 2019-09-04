import React from "react";
import arrowIconDark from "../img/arrow-icon-dark.svg";
import arrowIcon from "../img/right-arrow-icon.svg";
import styled from "../styles/theme";

interface ArrowBtnProps {
  altText: string;
  leftArrow: boolean;
  dark: boolean;
  onClick?: any;
  className?: string;
}

const ArrowButton: React.FC<ArrowBtnProps> = ({
  altText,
  leftArrow,
  dark,
  onClick,
  className
}) => {
  const classes = [className];

  if (leftArrow) {
    classes.push("left-arrow");
  }

  if (dark) {
    classes.push("dark");
  }

  return (
    <div className={classes.join(" ")} onClick={onClick}>
      <img src={dark ? arrowIconDark : arrowIcon} alt={altText} />
    </div>
  );
};

const StyledArrowButton = styled(ArrowButton)`
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

export default StyledArrowButton;

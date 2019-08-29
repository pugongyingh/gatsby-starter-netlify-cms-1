import React from "react";
import styled from "styled-components";

interface ArrowBtnProps {
  source: string;
  altText: string;
  leftArrow: boolean;
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
`;

const ArrowButton: React.FC<ArrowBtnProps> = ({
  source,
  altText,
  leftArrow
}) => {
  return (
    <StyledBtn className={leftArrow ? "left-arrow" : null}>
      <img src={source} alt={altText} />
    </StyledBtn>
  );
};

export default ArrowButton;

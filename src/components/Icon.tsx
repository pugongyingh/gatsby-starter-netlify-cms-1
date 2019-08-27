import React from "react";
import styled from "../styles/theme";

interface IconProps {
  source: string;
}

const Image = styled.img`
  width: 90px;
  height: 90px;
`;

const Icon: React.FC<IconProps> = props => {
  const { source } = props;
  return (
    <div>
      <Image src={source} />
    </div>
  );
};

export default Icon;

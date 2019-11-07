import * as React from "react";
import { MarkdownRemarkFrontmatterContactAddress } from "../../graphql/types";
import marker from "../../img/place.png";
import styled, { SCP } from "../../styles/theme";

interface P extends SCP {
  lat: number;
  lng: number;
  address: MarkdownRemarkFrontmatterContactAddress;
}

const MapTooltipTemplate: React.SFC<P> = ({ className, address }) => {
  return (
    <div className={className}>
      <div className="tooltip">
        <h4 className="tooltip__title">Starky's Club</h4>
        <p>{address.street}</p>
        <p>
          {address.zip} {address.city}
        </p>
      </div>
    </div>
  );
};

const MapTooltip = styled(MapTooltipTemplate)`
  position: relative;
  left: -70px;
  top: -115px;

  &:before {
    content: url(${marker});
  }

  .tooltip {
    background: white;
    position: absolute;
    padding: 1rem 1.5rem;
    right: -190px;
    top: 90px;
    width: 200px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

    font-family: Muli;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 128%;
    /* identical to box height, or 23px */

    color: #000000;

    @media ${props => props.theme.screen.laptop} {
      right: -325px;
      top: -39px;
    }

    &__title {
      margin-top: 0.5rem;
      margin-bottom: 1rem;
    }

    p {
      margin: 0;
      font-size: 16px;
    }
  }
`;

export default MapTooltip;

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
                <h4 className="tooltip__title">Starky's club</h4>
                <p>{address.street}</p>
                <p>{address.zip} {address.city}</p>
            </div>
        </div>
    );
}

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
        padding: 2rem 3rem;
        right: -300px;
        top: 0;

        &__title {
            margin-top: 0.5rem;
            margin-bottom: 1rem;
        }
    }
`;

export default MapTooltip;
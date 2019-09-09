import React from "react";
import { Col, Grid, Row } from "react-styled-flexboxgrid";
import styled from "../../styles/theme";
// import Icon from "../Icon";

import { MarkdownRemarkFrontmatterClients, Maybe } from "../../graphql/types";
import PreviewCompatibleImage from "../CMS/PreviewCompatibleImage";

const ClientsSection = styled.section`
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.black};
  /*height: 40vh;*/
  @media ${props => props.theme.screen.laptop} {
    padding: 7.5rem 0;
  }

  .container {
    .row {
      padding-top: 4vh;
    }
    .col {
      display: flex;
      justify-content: center;
      margin: -1px;

      @media ${props => props.theme.screen.laptop} {
        :not(:last-child) {
          border-right: 1px solid ${props => props.theme.colors.clientBorder};
        }
      }
    }
  }
  .vertical {
    border-right: 1px solid #6c6c6c;
  }
`;
interface ClientsProps {
  clients: Maybe<Array<Maybe<MarkdownRemarkFrontmatterClients>>>;
}

const Clients: React.FC<ClientsProps> = ({ clients }) => {
  return (
    <ClientsSection>
      <Grid className="container">
        <h1>Our Clients</h1>
        <Row />
        <Row className="row">
          {clients && clients.map(client => {
            if (!client) {
              return null;
            }
            return (
              <Col key={client.title} lg={3} xs={12} className="col">
                {client.logo &&
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: client.logo,
                      alt: `${client.title} logo`
                    }}
                  />
                }
              </Col>
            )
          })}
        </Row>
      </Grid>
    </ClientsSection>
  );
};

export default Clients;

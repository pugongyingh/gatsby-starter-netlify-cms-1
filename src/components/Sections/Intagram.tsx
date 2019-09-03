import React from "react";
import { Grid, Row } from "react-flexbox-grid";
import InstaImg01 from "../../img/instagram-1.png";
import styled from "../../styles/theme";
import ArrowButton from "../ArrowButton";
import ArrowLink from "../ArrowLink";
import InstagramItem from "../InstagramItem";

interface Props {}

const InstagramWrap = styled.section`
  .items-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  @media ${props => props.theme.screen.laptop} {
    .instagram-item {
      max-width: 420px;

      h2 {
        margin-top: 70px;
      }
    }
  }

  .followLink {
    margin-right: auto;
  }
`;

const Intagram: React.FC<Props> = () => {
  return (
    <InstagramWrap className="instagram">
      <Grid className="container">
        <h1>Instagram</h1>
        <Row className="items-wrap">
          <InstagramItem
            src={InstaImg01}
            alt="Instagram item 1"
            instaText="Prow scuttle parrel provost Sail ho 
            shrouds spirits boom mizzenmast yardarm. 😎 #starkysclub"
          />
          <InstagramItem
            src={InstaImg01}
            alt="Instagram item 1"
            instaText="Prow scuttle parrel provost Sail ho 
            shrouds spirits boom mizzenmast yardarm. 😎 #starkysclub"
          />
          <InstagramItem
            src={InstaImg01}
            alt="Instagram item 1"
            instaText="Prow scuttle parrel provost Sail ho 
            shrouds spirits boom mizzenmast yardarm. 😎 #starkysclub"
          />
        </Row>
        <Row className="arrow-icons-wrap">
          <ArrowLink
            text="Follow us on Instagram"
            link="#"
            instaFollowLink={true}
          />
          <ArrowButton dark={true} leftArrow={true} altText="An arrow icon" />
          <ArrowButton dark={true} leftArrow={false} altText="An arrow icon" />
        </Row>
      </Grid>
    </InstagramWrap>
  );
};

export default Intagram;

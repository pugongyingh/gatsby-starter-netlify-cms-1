import React from "react";
import { Grid, Row } from "react-flexbox-grid";
import InstaImg01 from "../../img/instagram-1.png";
import ArrowButton from "../ArrowButton";
import ArrowLink from "../ArrowLink";
import InstagramItem from "../InstagramItem";

interface Props {}

const Intagram: React.FC<Props> = () => {
  return (
    <section className="instagram">
      <Grid className="container">
        <h1>Instagram</h1>
        <Row className="instagram-wrap">
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
          <ArrowLink text="Follow us on Instagram" link="#" instaFollowLink={true} />
          <ArrowButton dark={true} leftArrow={true} altText="An arrow icon" />
          <ArrowButton dark={true} leftArrow={false} altText="An arrow icon" />
        </Row>
      </Grid>
    </section>
  );
};

export default Intagram;

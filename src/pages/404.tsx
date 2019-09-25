import React from "react";
import Header from "../components/Layout/Header";
import Page from "../components/Layout/Page";
import { Maybe } from "../graphql/types";

interface NotFoundPageProps {
  hero: string | File;
}

const NotFoundPage: React.SFC<NotFoundPageProps> = ({hero}) => (
  <div>
    <div>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness. </p>
    </div>
  </div>
);

export default NotFoundPage;

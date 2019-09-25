import * as React from "react";
import Header from "../components/Layout/Header";
import Page from "../components/Layout/Page";
import heroImg from "../img/hero-main-bg-opt.jpg";

export const FourOFourPage: React.FC = () => {

  return (
    <Page locale="en">
      <Header
        title="404"
        hero={heroImg}
        locale="en"
        four0four={true}
      />
    </Page>
  );
};

export default FourOFourPage;
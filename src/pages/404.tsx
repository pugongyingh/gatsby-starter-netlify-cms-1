import React, { Component } from "react";
import Header from "../components/Layout/Header";
import Page from "../components/Layout/Page";
import heroImg from "../img/hero-main-bg-opt.jpg";

interface FourOFourPageProps {}

class FourOFourPage extends Component<FourOFourPageProps> {
  
  // removeNbsp = (): void => {
  //   const el: any = document.getElementById("___gatsby");
  //   el.innerHTML = el.innerHTML.replace(/&nbsp;/g, "");
  // };

  public render() {

    return (
      <Page locale="en">
        <Header
          title="404"
          hero={heroImg}
          locale="en"
          four0four={true}
          subheading=""
        />
      </Page>
    );
  }
}

export default FourOFourPage;

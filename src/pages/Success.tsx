import React from 'react';
import Header from "../components/Layout/Header";
import Page from "../components/Layout/Page";
import heroImg from "../img/hero-main-bg-opt.jpg";

interface Props {
    
}

const Success: React.FC<Props> = () => {
    return (
        <Page locale="cs">
        <Header
          title="Děkujeme!"
          hero={heroImg}
          locale="cs"
          subheading="Vaše zpráva byla doručena, ozveme se Vám v brzké době!"
          btnText="successMessage"
          four0four={false}
        />
      </Page>
    )
}

export default Success

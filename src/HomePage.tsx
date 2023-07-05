// @flow

import * as React from "react";

import {
  Page,
  Form
} from "tabler-react";
import SiteWrapper from "./SiteWrapper";



function Home() {
  return (
    <SiteWrapper>
      <Page.Content title="Dashboard">
        <Page.Card
            title="Form elements"
            RootComponent={Form}
        >
        </Page.Card> 
      </Page.Content>
    </SiteWrapper>
  );
}

export default Home;

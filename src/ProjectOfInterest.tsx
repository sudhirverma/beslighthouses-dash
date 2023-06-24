import * as React from "react";

import {
  Page,
  Card,
  Button,
  Form
} from "tabler-react";
import SiteWrapper from "./SiteWrapper";



function ProjectOfInterest() {
  return (
    <SiteWrapper>
      <Page.Content title="">
        <Page.Card
            title="Projects Of Interest"
            RootComponent={Form}
        >
        </Page.Card> 
      </Page.Content>
    </SiteWrapper>
  );
}

export default ProjectOfInterest;
// @flow

import * as React from "react";

import {
  Page,
  Card,
  Button,
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
            footer={
            <Card.Footer>
                <div className="d-flex">
                <Button link>Cancel</Button>
                <Button type="submit" color="primary" className="ml-auto">
                    Send data
                </Button>
                </div>
            </Card.Footer>
            }
        >
        </Page.Card> 
      </Page.Content>
    </SiteWrapper>
  );
}

export default Home;

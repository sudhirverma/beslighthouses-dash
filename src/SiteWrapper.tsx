// @flow

import * as React from "react";
import { withRouter } from "react-router-dom";

import {
  Site,
  Nav,
  Grid,
  List,
  Button,
  RouterContextProvider,
} from "tabler-react";


type Props = {
  children: any,
};

type State = {
  notificationsObjects: any,
};

type subNavItem = {
  value: string,
  to?: string,
  icon?: string,
  LinkComponent?: React.ElementType,
  useExact?: boolean,
};

type navItem = {
  value: string,
  to?: string,
  icon?: string,
  active?: boolean,
  LinkComponent?: React.ElementType,
  subItems?: Array<subNavItem>,
  useExact?: boolean,
};

const navBarItems: Array<navItem> = [
  {
    value: "Home",
    to: "/",
    icon: "home",
    // LinkComponent: withRouter(NavLink),
    useExact: true,
  },
  {
    value: "Project Of Interest",
    icon: "box",
    to: "/POI",
    // LinkComponent: withRouter(ProjectOfInterest),
    useExact: true,
  },
];

class SiteWrapper extends React.Component<Props, State> {
  // state = {
  //   notificationsObjects: [
  //   ],
  // };

  render(): any {
    return (
      <Site.Wrapper
        headerProps={{
          href: "/",
          alt: "BeSLighthouse",
          // imageURL: "./demo/brand/tabler.svg",
          navItems: (
            <Nav.Item type="div" className="d-none d-md-flex">
              <Button
                href="https://github.com/Be-Secure/BeSLighthouse"
                target="_blank"
                outline
                size="sm"
                RootComponent="a"
                color="primary"
              >
                Source code
              </Button>
            </Nav.Item>
          )
        }}
        navProps={{ itemsObjects: navBarItems }}
        routerContextComponentType={withRouter(RouterContextProvider)}
        // footerProps={{
        //   links: [
        //     <a href="#">First Link</a>,
        //     <a href="#">Second Link</a>,
        //     <a href="#">Third Link</a>,
        //     <a href="#">Fourth Link</a>,
        //     <a href="#">Five Link</a>,
        //     <a href="#">Sixth Link</a>,
        //     <a href="#">Seventh Link</a>,
        //     <a href="#">Eigth Link</a>,
        //   ],
        //   note:
        //     "Premium and Open Source dashboard template with responsive and high quality UI. For Free!",
        //   copyright: (
        //     <React.Fragment>
        //       Copyright © 2019
        //       <a href="."> Tabler-react</a>. Theme by
        //       <a
        //         href="https://codecalm.net"
        //         target="_blank"
        //         rel="noopener noreferrer"
        //       >
        //         {" "}
        //         codecalm.net
        //       </a>{" "}
        //       All rights reserved.
        //     </React.Fragment>
        //   ),
        //   nav: (
        //     <React.Fragment>
        //       <Grid.Col auto={true}>
        //         <List className="list-inline list-inline-dots mb-0">
        //           <List.Item className="list-inline-item">
        //             <a href="./docs/index.html">Documentation</a>
        //           </List.Item>
        //           <List.Item className="list-inline-item">
        //             <a href="./faq.html">FAQ</a>
        //           </List.Item>
        //         </List>
        //       </Grid.Col>
        //       <Grid.Col auto={true}>
        //         <Button
        //           href="https://github.com/tabler/tabler-react"
        //           size="sm"
        //           outline
        //           color="primary"
        //           RootComponent="a"
        //         >
        //           Source code
        //         </Button>
        //       </Grid.Col>
        //     </React.Fragment>
        //   ),
        // }}
      >
        {this.props.children}
      </Site.Wrapper>
    );
  }
}

export default SiteWrapper;

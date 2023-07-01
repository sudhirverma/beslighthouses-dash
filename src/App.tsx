import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./HomePage";

// import "tabler-react/dist/Tabler.css";
import ProjectOfInterest from "./ProjectOfInterest";
import BeSVersionHistory from "./BesVersionHistory";

type Props = {};

function App(props: Props) {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/POI" component={ProjectOfInterest} />
          <Route exact path="/bes_version_history" component={BeSVersionHistory} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;
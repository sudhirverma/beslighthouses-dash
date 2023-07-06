import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./HomePage";

import "tabler-react/dist/Tabler.css";
import ProjectOfInterest from "./ProjectOfInterest";
import BeSVersionHistory from "./BesVersionHistory";
import BesAssessmentReport from "./BesAssessmentReport";
import VulnerabilityOfInterest from "./VulnerabilityOfInterest";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/POI" component={ProjectOfInterest} />
          <Route exact path="/VOI" component={VulnerabilityOfInterest} />
          <Route
            exact
            path="/bes_version_history/:besId/:besName"
            component={BeSVersionHistory}
          />
          <Route
            exact
            path="/bes_assessment_report/:besName/:besVersion/:besReport"
            component={BesAssessmentReport}
          />
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;

import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./HomePage";

import "tabler-react/dist/Tabler.css";
import ProjectOfInterest from "./ProjectOfInterest";
import BesAssessmentReport from "./BesAssessmentReport";
import VulnerabilityOfInterest from "./VulnerabilityOfInterest";
import ShowVulnerabilityDetails from "./report/vulnerability/ShowVulnerabilityDetails";

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
            component={VulnerabilityOfInterest}
          />
          <Route
            exact
            path="/vulnerability_report/:besId"
            component={ShowVulnerabilityDetails}
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

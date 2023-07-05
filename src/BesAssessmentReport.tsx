import * as React from "react";

import SiteWrapper from "./SiteWrapper";
import { Page } from "tabler-react";
import { fetchJsonReportOsspoiMaster } from "./utils/fatch_json_report";
import { useParams } from "react-router-dom";
import { Card, CardContent, Container, Grid } from "@mui/material";
import Scorecard from "./report/Scorecard";

// Fixme: Duplicate
const verifyLink = async (link: any, setLinkStatus: any) => {
  try {
    const response = await fetchJsonReportOsspoiMaster(link);
    try {
      let data = JSON.parse(response);
      setLinkStatus(data);
    } catch (err) {
      // ignore
    }
  } catch (error) {
    // ignore
  }
};

export const spanStyle: any = {
  fontSize: "1rem",
  fontWeight: 700,
  paddingRight: "13px",
};

function BesAssessmentReport() {
  let { besName, besVersion, besReport }: any = useParams();
  besName = besName.slice(1);
  besVersion = besVersion.slice(1);
  besReport = besReport.slice(1);

  return (
    <SiteWrapper>
      <Page.Content key={"pagekey"} title={`${besReport} Report: ${besName}`}>
        <Card key={"cardkey"}>
          {besReport === "Scorecard" ? (
            <Scorecard date="" version="" github="" commit="" score="" />
          ) : (
            <></>
          )}
        </Card>
        <Container
          style={{
            paddingTop: "20px",
            paddingLeft: "0px",
            paddingRight: "0px",
          }}
          maxWidth="lg"
        ></Container>
      </Page.Content>
    </SiteWrapper>
  );
}

export default BesAssessmentReport;

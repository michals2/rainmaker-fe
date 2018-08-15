import React from "react";
import { Route } from "react-router-dom";
import { Layout as AntdLayout } from "antd";

import Sider from "@components/Sider";

import AnalysisPage from "@components/AnalysisPage";
import HomePage from "@components/HomePage";

const { Content: AntdContent, Footer: AntdFooter } = AntdLayout;

AntdContent.displayName = "AntdContent";
AntdFooter.displayName = "AntdFooter";

const AppPresenter = () =>
  <AntdLayout style={{ minHeight: "100vh" }}>
    <Sider />
    <AntdLayout>
      <AntdContent style={{ margin: "16px 16px" }}>
        <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
          <Route exact path="/" component={HomePage} />
          <Route path="/analysis" component={AnalysisPage} />
        </div>
      </AntdContent>
      {/* <AntdFooter style={{ textAlign: "center" }}>
        Rainmaker Created 2018 by Luke Michals
      </AntdFooter> */}
    </AntdLayout>
  </AntdLayout>;

export default AppPresenter;

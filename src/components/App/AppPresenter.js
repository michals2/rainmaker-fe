import React from "react";
import { Route, Router } from "react-router-dom";
import { Layout as AntdLayout } from "antd";

import Sider from "@components/Sider";

import AnalysisPage from "@components/AnalysisPage";
import HomePage from "@components/HomePage";
import LandingPage from "@components/LandingPage";
import LoginPage from "@components/LoginPage";

import Auth from "@configs/auth.js";
import history from "@configs/history.js";

const { Content: AntdContent, Footer: AntdFooter } = AntdLayout;

AntdContent.displayName = "AntdContent";
AntdFooter.displayName = "AntdFooter";

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
};

const AppPresenter = () =>
  <Router history={history} component={HomePage}>
    <AntdLayout style={{ minHeight: "100vh" }}>
      <Sider />
      <AntdLayout>
        <AntdContent style={{ margin: "16px 16px" }}>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            <Route exact path="/" component={LandingPage} />
            <Route path="/login" component={LoginPage} />
            <Route
              path="/analysis"
              render={() => {
                if (auth.isAuthenticated()) {
                  return <AnalysisPage />;
                } else {
                  history.replace("/login");
                  return <LoginPage />;
                }
              }}
            />
            <Route
              path="/home"
              render={props => {
                handleAuthentication(props);
                return auth.isAuthenticated() ? <HomePage /> : <LoginPage />;
              }}
            />
          </div>
        </AntdContent>
      </AntdLayout>
    </AntdLayout>
  </Router>;

export default AppPresenter;

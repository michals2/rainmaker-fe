import React from "react";
import { Route, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon } from "antd";

import AnalysisPage from "@components/AnalysisPage";
import HomePage from "@components/HomePage";

const {
  Header: AntdHeader,
  Content: AntdContent,
  Footer: AntdFooter,
  Sider: AntdSider
} = Layout;
const { SubMenu: AntdSubMenu } = Menu;

AntdHeader.displayName = "AntdHeader";
AntdContent.displayName = "AntdContent";
AntdFooter.displayName = "AntdFooter";
AntdSider.displayName = "AntdSider";
AntdSubMenu.displayName = "AntdSubMenu";

class AppPresenter extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <AntdSider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
              <Link to="/">
                <Icon type="home" />
                <span>Home</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/analysis">
                <Icon type="pie-chart" />
                <span>Analysis</span>
              </Link>
            </Menu.Item>
          </Menu>
        </AntdSider>
        <Layout>
          {/* <AntdHeader style={{ background: "#fff", padding: 0 }} /> */}
          <AntdContent style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              <Route exact path="/" component={HomePage} />
              <Route path="/analysis" component={AnalysisPage} />
            </div>
          </AntdContent>
          <AntdFooter style={{ textAlign: "center" }}>
            Rainmaker Created 2018 by Luke Michals
          </AntdFooter>
        </Layout>
      </Layout>
    );
  }
}

export default AppPresenter;

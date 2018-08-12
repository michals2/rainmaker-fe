import React from "react";
import { Link } from "react-router-dom";
import { Layout as AntdLayout, Menu as AntdMenu, Icon as AntdIcon } from "antd";

const { Sider: AntdSider } = AntdLayout;
AntdSider.displayName = "AntdSider";
AntdMenu.displayName = "AntdMenu";
AntdIcon.displayName = "AntdIcon";

class SiderPresenter extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <AntdSider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <AntdMenu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <AntdMenu.Item key="1">
            <Link to="/">
              <AntdIcon type="home" />
              <span>Home</span>
            </Link>
          </AntdMenu.Item>
          <AntdMenu.Item key="2">
            <Link to="/analysis">
              <AntdIcon type="line-chart" />
              <span>Analysis</span>
            </Link>
          </AntdMenu.Item>
          <AntdMenu.Item key="3">
            <Link to="/settings">
              <AntdIcon type="setting" />
              <span>Settings</span>
            </Link>
          </AntdMenu.Item>
        </AntdMenu>
      </AntdSider>
    );
  }
}

export default SiderPresenter;

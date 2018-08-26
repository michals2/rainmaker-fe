import React, { Component } from "react";

import Auth from "configs/auth.js";
const auth = new Auth();

class LoginPage extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    auth.login();
  }

  logout() {
    auth.logout();
  }

  render() {
    const { isAuthenticated } = auth;

    return (
      <div>
        <button onClick={this.goTo.bind(this, "home")}>Home</button>
        {!isAuthenticated() &&
          <button onClick={this.login.bind(this)}>Log In</button>}
        {isAuthenticated() &&
          <button onClick={this.logout.bind(this)}>Log Out</button>}
      </div>
    );
  }
}

export default LoginPage;

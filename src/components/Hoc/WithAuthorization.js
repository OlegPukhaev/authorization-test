import React, { Component } from "react";

const WithAuthorization = (WrapedComponent) => {
  return class extends Component {
    render() {
      return <WrapedComponent isAuthenticated="Lets Go Auth" />;
    }
  };
};

export default WithAuthorization;

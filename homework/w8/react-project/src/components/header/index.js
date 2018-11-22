import React from "react";
// import ReactDOM from "react-dom";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.name = "header";
    this.title = "首页";
  }

  render() {
    return (
      <header>
        <i>icon</i>
        <span></span>
      </header>
    );
  }
}

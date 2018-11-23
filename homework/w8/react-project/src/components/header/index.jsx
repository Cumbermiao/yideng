import React from "react";
// import ReactDOM from "react-dom";
import './header.scss';
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.name = "header";
    this.title = "首页";
  }

  render() {
    return (
      <header className="header">
        <i>icon-left</i>
        <span>{this.title}</span>
        <i>icon-right</i>
      </header>
    );
  }
}

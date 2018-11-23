import React from "react";
import Header from "../components/header/index.jsx";
import {Link} from 'react-router-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header/>
        <Link to='/test'>test</Link>
      </div>
    );
  }
}


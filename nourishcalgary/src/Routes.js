import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/nourishCalgaryAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  // render() {
  //   return (
  //     <div className="text-gray-500 text-3xl">
  //       Tailwind is working
  //     </div>
  //   );
  // }
}

export default App;

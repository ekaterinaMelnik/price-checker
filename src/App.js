// /*global chrome*/
import React, { Component } from 'react';
import './App.css';
// import { getCurrentTab } from "./common/Utils";

class App extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   getCurrentTab((tab) => {
  //     chrome.runtime.sendMessage({ type: 'popupInit', tabId: tab.id }, (response) => {
  //       if (response) {
  //         this.setState({
  //           traffic: Object.assign(this.state.traffic, response)
  //         });
  //       }
  //     });
  //   });
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Chrome Extension</h1>
        </header>
        <p className="App-intro">
          My extension
        </p>
      </div>
    );
  }
}

export default App;
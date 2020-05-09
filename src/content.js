/*global chrome*/
import React from 'react';
import ReactDOM from 'react-dom';
import "./content.css";

class ContentReact extends React.Component {
  render() {
    return (
      <div className={'react-extension'}>
        <p>Hello From React Extension!</p>
      </div>
    )
  }
}

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<ContentReact/>, app);

app.style.display = "none";
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.message === "clicked_browser_action") {
      toggle();
    }
  }
);

function toggle() {
  if (app.style.display === "none") {
    app.style.display = "block";
  } else {
    app.style.display = "none";
  }
}
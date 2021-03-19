import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Panel from "./components/Panel";
import Navigator from "./components/Navigator";
import Body from "./components/Body";
import "bootstrap/dist/css/bootstrap.css";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.Fragment>
    <Navigator />
    <Panel />
    <Body />
  </React.Fragment>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

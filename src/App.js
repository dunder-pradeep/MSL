import React, { Component } from "react";
import Navigator from "./components/Navigator";
import Panel from "./components/Panel";
import Body from "./components/Body";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

import { Route, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" component={Navigator} />
          <ToastContainer />
          <Route path="/" component={Body}></Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

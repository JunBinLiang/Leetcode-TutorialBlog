import React, { Component } from "react";
import Problems from './Problems';
import Home from './Home';
import { Route, Switch, NavLink,BrowserRouter } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
		<Problems/>
      </div>
    );
  }
}
export default App;






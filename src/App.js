import React, { Component } from "react";
import Problems from './Problems';
import Home from './Home';
import { Route, Switch, NavLink,BrowserRouter } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
		<Switch>
		  <Route exact path={process.env.PUBLIC_URL+'/'} component={Home} />
		  <Route exact path={process.env.PUBLIC_URL+'/problems'} component={Problems} />
		</Switch>
      </div>
    );
  }
}
export default App;






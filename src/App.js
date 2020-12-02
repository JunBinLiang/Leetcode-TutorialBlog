import React, { Component } from "react";
import Problems from './Problems';
import Home from './Home';
import Team from './Component/Team';
import { Route, Switch, NavLink,BrowserRouter } from "react-router-dom";
import MyNavbar from './Component/MyNavbar';

class App extends Component {
  render() {
    return (
      <div>
		<MyNavbar/>
		<Switch>
		  <Route exact path={process.env.PUBLIC_URL+'/'} component={Home} />
		  <Route exact path={process.env.PUBLIC_URL+'/problems'} component={Problems} />
		  <Route exact path={process.env.PUBLIC_URL+'/about'} component={Team} />
		</Switch>
      </div>
    );
  }
}
export default App;






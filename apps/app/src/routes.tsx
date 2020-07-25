import React from 'react';
import {Router, Scene} from 'react-native-router-flux';

import Login from './screens/Login';
import Home from './screens/Home';

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="login" component={Login} initial hideNavBar />
      <Scene key="home" component={Home} title="Home" />
    </Scene>
  </Router>
);

export default Routes;

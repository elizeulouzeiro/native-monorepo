import React from 'react';
import {Router, Scene} from 'react-native-router-flux';

import Login from './screens/Login';

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="login" component={Login} initial hideNavBar />
    </Scene>
  </Router>
);

export default Routes;

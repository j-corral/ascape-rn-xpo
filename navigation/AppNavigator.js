import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// navigators import
import MainTabNavigator from './MainTabNavigator';
import MainNavigator from './main-navigation/MainNavigator';
import AuthNavigator from './AuthNavigator';

import AuthLoadingScreen from "../screens/auth/AuthLoadingScreen";

export default createAppContainer(
  createSwitchNavigator(
      {
        // You could add another route here for authentication.
        // Read more at https://reactnavigation.org/docs/en/auth-flow.html
        AuthLoading: AuthLoadingScreen,
        Auth: AuthNavigator,
        // Main: MainTabNavigator,
        Main: MainNavigator,
    },
    {
          initialRouteName: 'AuthLoading',
    }
  )
);

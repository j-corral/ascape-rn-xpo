import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// navigators import
import AuthNavigator from './AuthNavigator';
import MainNavigator from './main-navigation/MainNavigator';

import AuthLoadingScreen from "../screens/auth/AuthLoadingScreen";

export default createAppContainer(
  createSwitchNavigator(
      {
        AuthLoading: AuthLoadingScreen,
        Auth: AuthNavigator,
        Main: MainNavigator,
    },
    {
          initialRouteName: 'AuthLoading',
    }
  )
);

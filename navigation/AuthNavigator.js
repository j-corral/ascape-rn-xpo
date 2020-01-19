import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import SignInScreen from '../screens/auth/SignInScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import ResetPasswordScreen from '../screens/auth/ResetPasswordScreen';

const AuthNavigator = createStackNavigator(
  {
      SignIn: SignInScreen,
      SignUp: SignUpScreen,
      ResetPassword: ResetPasswordScreen,
  }, {
        defaultNavigationOptions: {
            headerTransparent: true,
            headerStyle: { borderBottomWidth: 0 },
        },
  }
);

export default AuthNavigator;
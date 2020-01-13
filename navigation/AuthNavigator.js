import React from 'react';
import { Platform } from 'react-native';
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
      headerMode: 'none'
  }
);

export default AuthNavigator;
import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import SignInScreen from '../screens/auth/SignInScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import ResetPasswordScreen from '../screens/auth/ResetPasswordScreen';
import VerticalGradient from "../components/atoms/gradients/vertical-gradient";

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
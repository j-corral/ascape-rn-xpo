import React from "react";
import {Platform} from "react-native";
import {createStackNavigator} from "react-navigation-stack";
import TabBarIcon from "../../../components/TabBarIcon";
import { Icon } from 'galio-framework';


// Screens import
import AccountProfileScreen from "../../../screens/account/account-profile/AccountProfileScreen";
import AccountSettingsScreen from "../../../screens/account/account-settings/AccountSettingsScreen";

const AccountStack = createStackNavigator(
    {
        AccountSettings: AccountSettingsScreen,
        AccountProfile: AccountProfileScreen,
    },
    {
        defaultNavigationOptions: {
            headerTransparent: true,
            headerStyle: { borderBottomWidth: 0 },
        },
    }
);

AccountStack.navigationOptions = {
    tabBarLabel: 'Account',
    tabBarIcon: ({ tintColor }) => <Icon name="user" family="feather" color={tintColor} size={32} />,
};

AccountStack.path ='';

export default AccountStack;
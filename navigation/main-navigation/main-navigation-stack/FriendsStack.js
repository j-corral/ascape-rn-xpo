import React from "react";
import {Platform} from "react-native";
import {createStackNavigator} from "react-navigation-stack";
import TabBarIcon from "../../../components/TabBarIcon";
import { Icon } from 'galio-framework';


// Screens import
import FriendsListScreen from "../../../screens/friends/friends-list/FriendsListScreen";

const FriendsStack = createStackNavigator(
    {
        FriendsList: FriendsListScreen,
    },
    {
        defaultNavigationOptions: {
            headerTransparent: true,
            headerStyle: { borderBottomWidth: 0 },
        },
    }
);

FriendsStack.navigationOptions = {
    tabBarLabel: 'Friends',
    tabBarIcon: ({ tintColor }) => <Icon name="users" family="feather" color={tintColor} size={32} />,
};

FriendsStack.path ='';

export default FriendsStack;
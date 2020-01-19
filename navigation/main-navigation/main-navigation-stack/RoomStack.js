import React from "react";
import {Platform} from "react-native";
import {createStackNavigator} from "react-navigation-stack";
import TabBarIcon from "../../../components/TabBarIcon";
import { Icon } from 'galio-framework';


// Screens import
import RoomListScreen from "../../../screens/rooms/room-list/RoomListScreen";

const RoomStack = createStackNavigator(
    {
        RoomList: RoomListScreen,
    },
    {
        defaultNavigationOptions: {
            headerTransparent: true,
            headerStyle: { borderBottomWidth: 0 },
        },
    }
);

RoomStack.navigationOptions = {
    tabBarLabel: 'Rooms',
    tabBarIcon: ({ tintColor }) => <Icon name="home" family="feather" color={tintColor} size={32} />,
};

RoomStack.path ='';

export default RoomStack;
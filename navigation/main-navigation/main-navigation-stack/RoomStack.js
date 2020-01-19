import React from "react";
import {Platform} from "react-native";
import {createStackNavigator} from "react-navigation-stack";
import TabBarIcon from "../../../components/TabBarIcon";
import { Icon } from 'galio-framework';


// Screens import
import RoomsScreen from "../../../screens/rooms/RoomsScreen";

const RoomStack = createStackNavigator(
    {
        Rooms: RoomsScreen,
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
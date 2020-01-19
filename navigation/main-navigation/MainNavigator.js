import React from 'react';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import {theme} from 'galio-framework';

const TabBarComponent = props => <BottomTabBar {...props} />;

// Stacks import
import RoomStack from "./main-navigation-stack/RoomStack";
import BookingStack from "./main-navigation-stack/BookingStack";
import FriendsStack from "./main-navigation-stack/FriendsStack";
import AccountStack from "./main-navigation-stack/AccountStack";

const MainNavigator = createBottomTabNavigator(
    {
        RoomStack,
        BookingStack,
        FriendsStack,
        AccountStack
    },
    {
        tabBarComponent: props => (
            <TabBarComponent {...props} style={{paddingTop:10, height:100, borderTopColor: '#9cd7f1', borderTopLeftRadius:25, borderTopRightRadius:25, borderTopWidth:0.6 }} />
        ),
        tabBarOptions: {
            activeTintColor: '#9cd7f1',
            inactiveTintColor: '#686868',
            labelStyle: {
                fontSize: theme.SIZES.NAVBAR_TITLE_TEXT * 0.9,
                textAlign: "center",
                textTransform: 'uppercase',
                marginBottom:20,
            },
        }
    }
);
MainNavigator.path = '';

export default MainNavigator;
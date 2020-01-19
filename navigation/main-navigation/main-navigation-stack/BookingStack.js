import React from "react";
import {Platform} from "react-native";
import {createStackNavigator} from "react-navigation-stack";
import TabBarIcon from "../../../components/TabBarIcon";
import { Icon } from 'galio-framework';


// Screens import
import BookingListScreen from "../../../screens/booking/booking-list/BookingListScreen";

const BookingStack = createStackNavigator(
    {
        BookingList: BookingListScreen,
    },
    {
        defaultNavigationOptions: {
            headerTransparent: true,
            headerStyle: { borderBottomWidth: 0 },
        },
    }
);

BookingStack.navigationOptions = {
    tabBarLabel: 'Bookings',
    tabBarIcon: ({ tintColor }) => <Icon name="play" family="feather" color={tintColor} size={32} />,
};

BookingStack.path ='';

export default BookingStack;
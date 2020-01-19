import React from 'react';
import {SafeAreaView} from "react-native";
import {Block, NavBar, Text} from "galio-framework";
import RoomToolbar from "../../organisms/rooms/room-toolbar";
import RoomListTemplate from "./room-list";
import RoomMapTemplate from "./room-map";

export default class RoomsTemplate extends React.Component {

    _displayList = () => {
        if(1) {
            return (<RoomListTemplate />)
        }
    };

    _displayMap = () => {
        if(1 > 2) {
            return (<RoomMapTemplate />)
        }
    };

    render() {
        return (
            <SafeAreaView style={{flex:1}}>
                <NavBar title="Rooms" transparent />
                {/* Organism room-toolbar */}
                <RoomToolbar/>
                {this._displayList()}
                {this._displayMap()}
            </SafeAreaView>
        )
    }
}
import React from 'react';
import {SafeAreaView, StatusBar} from "react-native";
import {Block, NavBar, Text} from "galio-framework";
import RoomToolbar from "../../organisms/rooms/room-toolbar";
import RoomListTemplate from "./room-list";
import RoomMapTemplate from "./room-map";

// Redux Link
import {connect} from 'react-redux';

class RoomsTemplate extends React.Component {

    _displayList = () => {
        if(this.props.displayMode === false) {
            return (<RoomListTemplate />)
        }
    };

    _displayMap = () => {
        if(this.props.displayMode === true) {
            return (<RoomMapTemplate />)
        }
    };

    render() {
        return (
            <SafeAreaView style={{flex:1}} >
                <StatusBar barStyle="dark-content" />
                <NavBar title="Rooms" style={{backgroundColor:'#f7f9ff'}} titleStyle={{color:'#5f00bc', fontSize:16, fontWeight:'bold', paddingTop:15}} />
                {/* Organism room-toolbar */}
                <RoomToolbar/>
                {this._displayList()}
                {this._displayMap()}
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        displayMode: state.displayMode
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomsTemplate);
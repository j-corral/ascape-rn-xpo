import React from 'react';
import {SafeAreaView, StatusBar} from "react-native";
import {NavBar} from "galio-framework";

class FriendsListTemplate extends React.Component {
    render() {
        return (
            <SafeAreaView style={{flex:1}} >
                <StatusBar barStyle="dark-content" />
                <NavBar title="Friends" style={{backgroundColor:'#f7f9ff'}} titleStyle={{color:'#5f00bc',fontSize:16, fontWeight:'bold', paddingTop:15}} />

            </SafeAreaView>
        )
    }
}

export default FriendsListTemplate;
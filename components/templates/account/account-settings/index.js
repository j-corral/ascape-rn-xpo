import React from 'react';
import {SafeAreaView, StatusBar, } from "react-native";
import {Block, Button, NavBar, Text} from "galio-framework";
import { withNavigation } from 'react-navigation';

class AccountSettingsTemplate extends React.Component {
    /**
     * Description of doSignOut
     * @author Jonathan Corral
     * @version 0.1
     * @since 0.1
     *
     * @return {boolean | NavigationNavigateAction | Promise<WindowClient | null>}
     * @private
     */
    _doSignOut = () => {
        // await AsyncStorage.clear();
        return this.props.navigation.navigate('Auth');
    };

    render() {
        return (
            <SafeAreaView style={{flex:1}} >
                <StatusBar barStyle="dark-content" />
                <NavBar title="Account" style={{backgroundColor:'#f7f9ff'}} titleStyle={{color:'#5f00bc',fontSize:16, fontWeight:'bold', paddingTop:15}} />

                <Block safe flex={1}>
                    <Text>My account</Text>
                    <Button onPress={() => {this._doSignOut()}}>Sign Out</Button>
                </Block>
            </SafeAreaView>
        )
    }
}

export default withNavigation(AccountSettingsTemplate);
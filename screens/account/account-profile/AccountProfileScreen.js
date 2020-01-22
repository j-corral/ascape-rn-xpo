import React from "react";
import {Block, Text, Button} from 'galio-framework';
// import {AsyncStorage} from "react-native";

export default class AccountProfileScreen extends React.Component {
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
            <Block safe flex={1}>
                <Text>My account</Text>
                <Button onPress={() => {this._doSignOut()}}>Sign Out</Button>
            </Block>
        )
    }
}
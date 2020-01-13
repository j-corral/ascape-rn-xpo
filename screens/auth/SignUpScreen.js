import {SafeAreaView, Button, Text} from 'react-native';
import React from "react";

/**
 * SignUpScreen class
 * @author Jonathan Corral
 * @version 0.1
 * @since 0.1
 * @package screens/auth
 */
class SignUpScreen extends React.Component {
    /**
     * @type {{title: string}}
     */
    static navigationOptions = {
        title: 'Sign Up',
        headerVisible: false,
    };

    /**
     * Description of doSignUp
     * @author Jonathan Corral
     * @version 0.1
     * @since 0.1
     *
     * @return {boolean | NavigationNavigateAction | Promise<WindowClient | null>}
     * @private
     */
    _doSignUp = () => {
        console.log('User Signed Up');
        let bResult = this.props.navigation.navigate('SignIn');

        return bResult;
    };

    /**
     * Description of render
     * @author Jonathan Corral
     * @version 0.1
     * @since 0.1
     *
     * @return {*}
     */
    render() {
        return (
            <SafeAreaView style={{flex:1}}>
                <Text>Sign Up</Text>
                <Button title="Sign Up" onPress={() => {this._doSignUp()}} />
            </SafeAreaView>
        );
    }
}

export default SignUpScreen;
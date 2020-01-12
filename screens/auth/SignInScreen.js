import {AsyncStorage, View, Button, Text} from 'react-native';
import React from "react";

/**
 * SignInScreen class
 * @author Jonathan Corral
 * @version 0.1
 * @since 0.1
 * @package screens/auth
 */
class SignInScreen extends React.Component {
    /**
     *
     * @type {{title: string}}
     */
    static navigationOptions = {
        title: 'Please sign in',
    };

    /**
     * Description of doSignIn
     * @author Jonathan Corral
     * @version 0.1
     * @since 0.1
     *
     * @return {Promise<boolean|NavigationNavigateAction|WindowClient|null>}
     * @private
     */
    _doSignIn = async () => {
        await AsyncStorage.setItem('userToken', 'abc', () => {
            console.log('User Logged In');
        });
        return this.props.navigation.navigate('Main');
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
        return this.props.navigation.navigate('SignUp');
    };

    /**
     * Description of doResetPassword
     * @author Jonathan Corral
     * @version 0.1
     * @since 0.1
     *
     * @return {boolean | NavigationNavigateAction | Promise<WindowClient | null>}
     * @private
     */
    _doResetPassword = () => {
        return this.props.navigation.navigate('ResetPassword');
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
            <View>
                <Text>Login</Text>
                <Button title="Sign in!" onPress={() => {this._doSignIn()}} />
                <Button title="Sign up" onPress={() => {this._doSignUp()}} />
                <Button title="Reset password" onPress={() => {this._doResetPassword()}} />
            </View>
        );
    }
}

export default SignInScreen;
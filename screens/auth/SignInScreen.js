import React from "react";
import {AsyncStorage} from 'react-native';
import {Block} from 'galio-framework';

import SignIn from '../../components/molecules/SignIn'

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
        // title: 'Sign In',
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
            <Block safe middle>
                <SignIn signInAction={() => {this._doSignIn()}}
                        signUpAction={() => {this._doSignUp()}}
                        resetPasswordAction={() => {this._doResetPassword()}}
                />
            </Block>
        );
    }
}

export default SignInScreen;
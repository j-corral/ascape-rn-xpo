import {SafeAreaView, Button, Text} from 'react-native';
import React from "react";
import SignUpTemplate from "../../components/templates/authentication/sign-up";

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
    /*static navigationOptions = {
        // title: 'Sign Up',
    };*/

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
        let bResult = this.props.navigation.navigate('Main');
        return bResult;
    };

    /**
     * Description of _signInAction
     * @author Jonathan Corral
     * @version 0.1
     * @since 0.1
     *
     * @return {boolean | NavigationNavigateAction | Promise<WindowClient | null>}
     * @private
     */
    _signInAction = () => {
        let bResult = this.props.navigation.goBack();
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
            <SignUpTemplate doSignUp={() => this._doSignUp()} signInAction={() => this._signInAction()}/>
        );
    }
}

export default SignUpScreen;
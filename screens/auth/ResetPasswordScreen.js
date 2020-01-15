import React from "react";
import ResetPasswordTemplate from "../../components/templates/authentication/reset-password";

/**
 * ResetPasswordScreen class
 * @author Jonathan Corral
 * @version 0.1
 * @since 0.1
 * @package screens/auth
 */
class ResetPasswordScreen extends React.Component {
    /**
     * @type {{title: string}}
     */
    static navigationOptions = {
        //title: 'Reset Password',
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
        console.log('User password reset');
        let bResult = this.props.navigation.navigate('SignIn');

        return bResult;
    };

    /**
     * Description of resetPassword
     * @author Jonathan Corral
     * @version 0.1
     * @since 0.1
     *
     * @return {*}
     */
    render() {
        return (
            <ResetPasswordTemplate doResetPassword={() => {this._doResetPassword()}} />
        );
    }
}

export default ResetPasswordScreen;
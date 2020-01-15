import React from 'react';
import {Block, Text} from 'galio-framework';
import TextInput from "../../../atoms/inputs/text-input";
import MainButton from "../../../atoms/buttons/main-button";

export default class ForgotPasswordForm extends React.Component{

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

    render() {
        return (
            <Block flex={this.props.flex}>
                <Block flex={this.props.flex}>
                    <Text h4 color='#fff' style={{paddingBottom:40}}>Forgot password?</Text>
                    <TextInput placeholder={"email@domain.tld"} icon="mail" />
                </Block>
                <Block flex={this.props.flex}>
                    <MainButton onPress={this.props.doResetPassword} >Reset my password</MainButton>
                </Block>
            </Block>
        )
    }
}
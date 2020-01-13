import React from 'react';
import {Image} from 'react-native';
import {theme, Block, Text }from 'galio-framework';
import MainButton from "../../atoms/buttons/main-button";
import TextInput from "../../atoms/inputs/text-input";
import TextButton from "../../atoms/buttons/text-button";

export default class SignIn extends React.Component{

    _displaySignInButton() {
        if(this.props.signInAction) {
            return (
                <MainButton title="Sign In" onPress={this.props.signInAction} />
            )
        }
    }

    _displaySignUpButton() {
        if(this.props.signUpAction) {
            return (
                <TextButton  title="Don't have an account? Sign Up" onPress={this.props.signUpAction} />
            )
        }
    }

    _displayResetPasswordButton() {
        if(this.props.resetPasswordAction) {
            return (
                <TextButton title="Forgot your password?" onPress={this.props.resetPasswordAction} />
            )
        }
    }


    render() {
        return (
            <Block flex={1}>
                <Block flex={1} middle>
                    <Image
                        style={{width:100, height: 100, alignItems:'center', justifyContent: 'center'}}
                        source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
                    />
                </Block>
                <Block flex={2}>
                    <Text h3 color='#fff'>Sign In</Text>
                    <TextInput placeholder={"email@domain.tld"} icon="mail" />
                    <TextInput placeholder={"password"} password viewPass />
                    {this._displayResetPasswordButton()}
                </Block>
                <Block flex={1}>
                    {this._displaySignInButton()}
                    {this._displaySignUpButton()}
                </Block>
            </Block>
        );
    }
}
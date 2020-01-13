import React from 'react';
import {Image, View} from 'react-native';
import {theme, Block, Text }from 'galio-framework';
import MainButton from "../../atoms/buttons/main-button";
import TextInput from "../../atoms/inputs/text-input";
import TextButton from "../../atoms/buttons/text-button";
import {Svg, Ellipse, SvgUri} from "react-native-svg";
import Logo from "../../../assets/images/ascape.svg";

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
            <Block flex={2}>
                <Block flex={2} middle>
                    {/*<Svg viewBox="0 0 344.41 360.71" style={{
                        top: 0,
                        left: 0,
                        width: 344,
                        height: 361,
                        position: "absolute",
                        opacity: 0.85
                    }}>
                        <Ellipse
                            strokeWidth={0}
                            fill="rgba(254,19,124,1)"
                            stroke="rgba(255,255,255,1)"
                            cx={172}
                            cy={180}
                            rx={172}
                            ry={180}
                        />
                    </Svg>*/}
                    <Logo width={200} height={200} />
                </Block>
                <Block flex={2}>
                    <Text h3 color='#fff' style={{paddingBottom:40}}>Sign In</Text>
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
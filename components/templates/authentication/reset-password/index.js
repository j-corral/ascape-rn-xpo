import React from 'react';
import {SafeAreaView} from 'react-native';
import {Block} from 'galio-framework';

import LogoSVG from "../../../atoms/svg/logo-svg";
import ForgotPasswordForm from "../../../molecules/forms/forgot-password-form";
import VerticalGradient from "../../../atoms/gradients/vertical-gradient";

export default class ResetPasswordTemplate extends React.Component{
    render() {
        return (
            <SafeAreaView style={{flex:1}}>
                <VerticalGradient>
                    <Block flex={1} middle>
                        <LogoSVG />
                    </Block>
                    <ForgotPasswordForm flex={2} {...this.props}  />
                </VerticalGradient>
            </SafeAreaView>
        )
    }
}
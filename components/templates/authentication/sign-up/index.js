import React from 'react';
import {SafeAreaView} from 'react-native';
import Block from "galio-framework/src/Block";

import CreateAccount from "../../../organisms/create-account";
import VerticalGradient from "../../../atoms/gradients/vertical-gradient";
import Logo from "../../../../assets/images/ascape.svg";

export default class SignUpTemplate extends React.Component{
    render() {
        return (
            <SafeAreaView style={{flex:1}}>
                <VerticalGradient>
                    <CreateAccount {...this.props}  />
                </VerticalGradient>
            </SafeAreaView>
        )
    }
}
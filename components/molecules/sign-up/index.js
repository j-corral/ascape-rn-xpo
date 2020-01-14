import React from 'react';
import {Block, Text} from 'galio-framework';
import TextInput from "../../atoms/inputs/text-input";
import MainButton from "../../atoms/buttons/main-button";
import Logo from "../../../assets/images/ascape.svg";
import TextButton from "../../atoms/buttons/text-button";

export default class SignUp extends React.Component{

    render() {
        return (
            <Block>
                <Block flex={2} middle>
                    <Logo width={200} height={200} />
                </Block>
                <Block flex={2}>
                    <Text h3 color='#fff' style={{paddingBottom:40}}>Sign Up</Text>
                    <TextInput placeholder={"username"} icon="user" />
                    <TextInput placeholder={"email@domain.tld"} icon="mail" />
                    <TextInput placeholder={"password"} password viewPass />
                </Block>
                <Block flex={1}>
                    <MainButton onPress={this.props.doSignUp} >Create my account</MainButton>
                    <TextButton onPress={this.props.signInAction} >Already have an account? Sign In</TextButton>
                </Block>
            </Block>
        )
    }
}
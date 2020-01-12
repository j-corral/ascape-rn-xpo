import React from 'react';
import {Image} from 'react-native';
import {theme, Block, Button, Input, Text }from 'galio-framework';

export default class SignIn extends React.Component{

    _displaySignIn() {
        if(this.props.signInAction) {
            return (
                <Button title="Sign In"
                        round size='small'
                        color="info"
                        onPress={this.props.signInAction}
                >
                    Sign In
                </Button>
            )
        }
    }

    _displaySignUp() {
        if(this.props.signUpAction) {
            return (
                <Button title="Sign Up"
                        round size='small'
                        color="info"
                        onPress={this.props.signUpAction}
                >
                    Sign Up
                </Button>
            )
        }
    }

    _displayResetPassword() {
        if(this.props.resetPasswordAction) {
            return (
                <Button title="Reset Password"
                        round size='small'
                        color="info"
                        onPress={this.props.resetPasswordAction}
                >
                    Reset Password
                </Button>
            )
        }
    }


    render() {
        return (
            <Block>
                <Image
                    style={{width:50, height: 50, alignItems:'center', justifyContent: 'center'}}
                    source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
                />
                <Text h3>Sign In</Text>
                <Input placeholder="email@example.com"
                       rounded
                       icon="mail" right
                       family="antdesign"
                       iconSize={14}
                       iconColor="black"
                />
                <Input placeholder="password"
                       rounded
                       password
                       viewPass
                />
                {this._displaySignIn()}
                {this._displaySignUp()}
                {this._displayResetPassword()}
            </Block>
        );
    }
}
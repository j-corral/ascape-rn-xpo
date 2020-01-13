import React from 'react';
import {Button}from 'galio-framework';

export default class MainButton extends Button {

    render() {
        return (
            <Button title={this.props.title}
                    uppercase={this.props.uppercase}
                    round
                    color="#fff"
                    textStyle={{color:'#5f00bc', fontWeight:'bold'}}
                    onPress={this.props.onPress}
            >
                {this.props.title}
            </Button>
        )
    }
}
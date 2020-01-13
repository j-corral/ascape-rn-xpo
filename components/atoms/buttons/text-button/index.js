import React from 'react';
import {Button}from 'galio-framework';

export default class TextButton extends Button {

    render() {
        return (
            <Button title={this.props.title}
                    uppercase={this.props.uppercase}
                    color={this.props.uppercase ?? "transparent" }
                    shadowless
                    textStyle={{color:'white'}}
                    onPress={this.props.onPress}
            >
                {this.props.title}
            </Button>
        )
    }
}
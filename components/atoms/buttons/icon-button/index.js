import React from 'react';
import {Button}from 'galio-framework';

export default class IconButton extends Button {

    render() {
        return (
            <Button onlyIcon
                    round
                    color={this.props.color ?? 'transparent'}
                    iconFamily={this.props.iconFamily ?? 'antdesign'}
                    iconSize={this.props.iconSize ?? 40}
                    iconColor={this.props.iconColor ?? 'white'}
                    icon={this.props.icon}
                    onPress={this.props.onPress}
                    title={this.props.title}
            >
                {this.props.title}
            </Button>
        )
    }
}
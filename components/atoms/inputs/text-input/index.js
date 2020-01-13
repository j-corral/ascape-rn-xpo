import React from 'react';
import {Input} from 'galio-framework';

export default class TextInput extends Input{

    render() {
        return (
            <Input placeholder={this.props.placeholder}
                   label={this.props.label}
                   rounded
                   placeholderTextColor='#fff'
                   bgColor='transparent'
                   color='#ffffff'
                   style={{borderColor:"#fff"}}
                   password={this.props.password}
                   viewPass={this.props.viewPass}
                   icon={this.props.icon} right
                   family="antdesign"
                   iconSize={16}
                   iconColor="#fff"
            />
        )
    }
}
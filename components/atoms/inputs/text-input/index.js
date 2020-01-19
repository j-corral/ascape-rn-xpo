import React from 'react';
import {Input} from 'galio-framework';

export default class TextInput extends Input{

    render() {
        const {...extraProps} = this.props;
        return (
            <Input rounded
                   placeholderTextColor='#ededed'
                   bgColor='transparent'
                   color='#ffffff'
                   style={{borderColor:"#fff"}}
                   icon={this.props.icon} right
                   family="antdesign"
                   iconSize={16}
                   iconColor="#fff"
                   {...extraProps}
            />
        )
    }
}
import React from 'react';
import {Button}from 'galio-framework';

export default class IconButton extends Button {

    /**
     *
     * @return {Button}
     */
    render() {
        const {...extraProps} = this.props;
        return (
            <Button onlyIcon
                    round
                    color={Prop.color}
                    iconFamily={Prop.iconFamily}
                    iconSize={Prop.iconSize}
                    iconColor={Prop.iconColor}
                    {...extraProps}
            >
            </Button>
        )
    }
}

const Prop = {
    color: 'transparent',
    iconFamily: 'antdesign',
    iconSize: 40,
    iconColor: 'white',
};
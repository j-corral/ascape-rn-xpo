import React from 'react';
import {Button}from 'galio-framework';
import Style from "./index.style";

/**
 * @type Button
 * @return Button
 */
export default class TextButton extends Button {

    /**
     *
     * @return {Button}
     */
    render() {
        const {...extraProps} = this.props;
        return (
            <Button shadowless
                    color={Prop.color}
                    textStyle={Style.textStyle}
                    {...extraProps}
            >
            </Button>
        )
    }
}

const Prop = {
    color: 'transparent',
};
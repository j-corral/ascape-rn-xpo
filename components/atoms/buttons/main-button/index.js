import React from 'react';
import {Button} from 'galio-framework';
import Style from "./index.style";

/**
 *
 */
export default class MainButton extends Button {

    /**
     *
     * @return {Button}
     */
    render() {
        const {...extraProps} = this.props;
        return (
            <Button round
                    color={Prop.color}
                    textStyle={Style.textStyle}
                    {...extraProps}
            >
            </Button>
        )
    }
}

const Prop = {
    color: 'white',
};
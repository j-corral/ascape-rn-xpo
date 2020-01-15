import React from 'react';
import Logo from "../../../../assets/images/ascape.svg";

export default class LogoSVG extends React.Component {
    render() {
        const {...extraProps} = this.props;
        return (
            <Logo width={this.props.width ?? 200} height={this.props.height ?? 200} {...extraProps} />
        )
    }
}
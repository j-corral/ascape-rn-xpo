import React from 'react';
import {Block, Icon, Switch, Text, theme} from 'galio-framework';

export default class IconSwitch extends React.Component {
    render() {
        const {...extraProps} = this.props;
        return (
            <Block row space="around">
                <Icon name={extraProps.leftIcon}
                      family={extraProps.leftFamily ?? Prop.family}
                      color={extraProps.leftColor ?? Prop.leftColor}
                      size={extraProps.leftSize ?? Prop.size}
                      style={extraProps.leftStyle ?? Prop.leftStyle}
                />
                <Switch
                    ios_backgroundColor={extraProps.ios_backgroundColor ?? Prop.ios_backgroundColor}
                    thumbColor={extraProps.thumbColor ?? Prop.thumbColor}
                    trackColor={extraProps.trackColor ?? Prop.trackColor}
                    style={extraProps.switchStyle ?? Prop.switchStyle}
                    initialValue={extraProps.initialValue ?? Prop.initialValue}
                    onChange={() => {}}
                    value={extraProps.switchValue}
                    onValueChange={extraProps.onValueChange}
                />
                <Icon name={extraProps.rightIcon}
                      family={extraProps.rightFamily ?? Prop.family}
                      color={extraProps.rightColor ?? Prop.rightColor}
                      size={extraProps.rightSize ?? Prop.size}
                      style={extraProps.rightStyle ?? Prop.rightStyle}
                />
            </Block>
        );
    }
}

const Prop = {
    family: 'feather',
    leftColor: '#5aabdc',
    rightColor:'#fd003a',
    size: theme.SIZES.ICON * 1.75,
    leftStyle: {marginRight: 25,paddingTop:theme.SIZES.ICON},
    rightStyle: {marginLeft:10,paddingTop:theme.SIZES.ICON * 0.7, marginRight:15},
    switchStyle: {paddingTop:theme.SIZES.ICON * 1.5, transform: [{scaleX: 1.4}, {scaleY: 1.4}]},
    ios_backgroundColor: 'red',
    thumbColor: 'white',
    trackColor: {false: '#5aabdc', true: '#fd003a'},
    initialValue: false,
};
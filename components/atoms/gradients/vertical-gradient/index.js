import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import {theme}from 'galio-framework';

export default class VerticalGradient extends React.Component{

    render() {
        return (
            <LinearGradient
                style={{flex: 1, flexDirection:'column', alignItems: 'center'}}
                start={{ x: 0, y: 0.05 }}
                end={{ x: 1, y: 0.05 }}
                locations={[0.0, 0.99]}
                colors={['#57afde', '#9e61b7']}
            >
                {this.props.children}
            </LinearGradient>
        )
    }
}
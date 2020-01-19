import React from 'react';
import {Block, theme} from "galio-framework";

// Atoms import
import IconButton from "../../../atoms/buttons/icon-button";
import TextInput from "../../../atoms/inputs/text-input";

export default class SearchForm extends React.Component {
    render() {
        return (
            <Block row >
                <IconButton icon="search" iconFamily="feather" iconColor="#686868" iconSize={theme.SIZES.ICON * 1.75} style={{marginLeft:15, marginRight:15,paddingTop:theme.SIZES.ICON * 0.7}} />
                <TextInput placeholder="search items" color="#686868" placeholderTextColor="#cdcdcd" style={{borderColor:"#cdcdcd"}} />
            </Block>
        )
    }
}
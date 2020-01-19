import React from 'react';
import { withNavigation } from 'react-navigation';
import {Block} from "galio-framework";

// Molecules import
import SearchForm from "../../../molecules/forms/search-form";
import IconSwitch from "../../../molecules/switchs/icon-switch";

class RoomToolbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            switchValue: false,
        };
    }

    _switchViewMode = (value) => {
        this.setState({switchValue: !this.state.switchValue});
        console.log("new val:" + this.state.switchValue);

        if(this.state.switchValue) {
            this.props.navigation.navigate('RoomList');
        } else {
            this.props.navigation.navigate('RoomMap');
        }

    };

    render() {
        return (
            <Block flex={0} row space="around">
                {/*Molecule search*/}
                <SearchForm />
                {/* Molecule IconSwitch*/}
                <IconSwitch leftIcon="align-left" rightIcon="map-pin" onValueChange={() => this._switchViewMode()} switchValue={this.state.switchValue} />
            </Block>
        )
    }
}

export default withNavigation(RoomToolbar);
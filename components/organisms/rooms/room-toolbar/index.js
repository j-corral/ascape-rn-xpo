import React from 'react';
import { withNavigation } from 'react-navigation';
import {Block} from "galio-framework";

// Redux Link
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


// Molecules import
import SearchForm from "../../../molecules/forms/search-form";
import IconSwitch from "../../../molecules/switchs/icon-switch";

class RoomToolbar extends React.Component {

    constructor(props) {
        super(props);
    }

    _switchViewMode = (value) => {
        const action = { type: "SWITCH_MODE", value: this.props.displayMode };
        this.props.dispatch(action);
    };

    render() {
        return (
            <Block flex={0} row space="around" style={{backgroundColor:'#f7f9ff'}}>
                {/*Molecule search*/}
                <SearchForm />
                {/* Molecule IconSwitch*/}
                <IconSwitch leftIcon="align-left" rightIcon="map-pin" onValueChange={() => this._switchViewMode()} switchValue={this.props.displayMode} />
            </Block>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        displayMode: state.displayMode
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(RoomToolbar);
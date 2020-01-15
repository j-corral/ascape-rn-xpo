import React from 'react';
import SignUp from "../../molecules/sign-up";


export default class CreateAccount extends React.Component{

    render() {
        return (
            <SignUp {...this.props} />
        )
    }
}
import React from 'react';
import {Input} from 'galio-framework';
import TextInput from "../text-input";

export default class PasswordInput extends TextInput{

    render() {
        return (
            <TextInput  password viewPass />
        )
    }
}
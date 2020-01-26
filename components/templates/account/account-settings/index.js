import React from 'react';
import { withNavigation } from 'react-navigation';
import {Block, Button, NavBar, Text, Card, theme} from "galio-framework";
import {SafeAreaView, StatusBar, FlatList, ListView, ScrollView, View} from "react-native";
import { ListItem } from 'react-native-elements';

class AccountSettingsTemplate extends React.Component {
    /**
     * Description of doSignOut
     * @author Jonathan Corral
     * @version 0.1
     * @since 0.1
     *
     * @return {boolean | NavigationNavigateAction | Promise<WindowClient | null>}
     * @private
     */
    _doSignOut = () => {
        // await AsyncStorage.clear();
        return this.props.navigation.navigate('Auth');
    };

    keyExtractor = (item, index) => index.toString();

    renderItem = ({ item }) => {
        return  (
            <ListItem
                chevron={{color:'#9cd7f1', size:25}}
                style={{
                    marginLeft:25,
                    marginRight:25,
                    marginBottom:10,
                }}
                onPress={() => {this._doSignOut()}}
                {...item}
            />
        );
    };

    render() {
        return (
            <SafeAreaView style={{flex:1, backgroundColor:'#f7f9ff'}}>
                <Block>
                    <StatusBar barStyle="dark-content" />
                    <NavBar title="Account"
                            style={{backgroundColor:'#f7f9ff'}}
                            titleStyle={{color:'#5f00bc',fontSize:16, fontWeight:'bold', paddingTop:15}}
                    />
                    <Block card style={{
                        marginTop:25,
                        marginBottom:25,
                        marginLeft:20,
                        marginRight:20,
                        borderColor: 'transparent',
                        borderRadius:10,
                        shadowColor: '#686868',
                        shadowOffset: { width: 5, height: 5 },
                        shadowOpacity: 0.5,
                        shadowRadius: 1,
                        elevation: 5}}>
                        <ListItem
                            key={1}
                            leftAvatar={{ source: { uri: 'https://jonathan-corral.xyz/wp-content/uploads/2018/08/me.jpg' } }}
                            title="Jonathan Corral"
                            titleStyle={{fontWeight:'bold'}}
                            subtitle="View my profile"
                            chevron={{color:'#5f00bc', size:25}}
                            containerStyle={{borderRadius:10}}
                        />
                    </Block>
                </Block>

                <Text h5 style={{fontWeight:'bold', marginLeft:25, marginTop:25}}>Settings</Text>
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={list}
                    renderItem={this.renderItem}
                    style={{
                        marginTop:15,
                        borderTopLeftRadius:30,
                        borderTopRightRadius:30,
                        backgroundColor: 'white',
                        shadowColor: '#686868',
                        shadowOffset: { width: 5, height: 5 },
                        shadowOpacity: 0.5,
                        shadowRadius: 1,
                        elevation: 5
                    }}
                />
            </SafeAreaView>
        )
    }
}

const list = [
    {
        title: 'Personal data',
        leftIcon: {
            name: 'user',
            type:'feather',
            color:'#686868',
        },
        onPress: () => {},
    },
    {
        title: 'Payment methods',
        leftIcon: {
            name: 'credit-card',
            type:'feather',
            color:'#686868',
        },
        onPress: () => {},
    },
    {
        title: 'Notifications',
        leftIcon: {
            name: 'bell',
            type:'feather',
            color:'#686868',
        },
        onPress: () => {},
    },
    {
        title: 'Contacts',
        leftIcon: {
            name: 'users',
            type:'feather',
            color:'#5f00bc',
        },
        onPress: () => {},
    },
    {
        title: 'FAQ',
        leftIcon: {
            name: 'help-circle',
            type:'feather',
            color:'#9cd7f1',
        },
        onPress: () => {},
    },
    {
        title: 'Terms and conditions',
        leftIcon: {
            name: 'book',
            type:'feather',
            color:'#ffca18',
        },
        onPress: () => {},
    },
    {
        title: 'Privacy policy',
        leftIcon: {
            name: 'shield',
            type:'feather',
            color:'#ffca18',
        },
        onPress: () => {},
    },
    {
        title: 'Other settings',
        leftIcon: {
            name: 'settings',
            type:'feather',
            color:'#686868',
        },
        onPress: () => {},
    },
    {
        title: 'Sign Out',
        leftIcon: {
            name: 'log-out',
            type:'feather',
            color:'red',
        },
        bottomDivider:false,
        // chevron:false,
        // onPress: () => {},
    },
];

export default withNavigation(AccountSettingsTemplate);
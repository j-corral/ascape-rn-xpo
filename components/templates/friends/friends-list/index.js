import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, ScrollView} from "react-native";
import {Block, NavBar, Text} from "galio-framework";

import SearchForm from "../../../molecules/forms/search-form";
import {ListItem} from "react-native-elements";

class FriendsListTemplate extends React.Component {

    render() {
        return (
            <SafeAreaView style={{flex:1, backgroundColor:'#f7f9ff'}} >
                <StatusBar barStyle="dark-content" />
                <NavBar title="Friends" style={{backgroundColor:'#f7f9ff'}} titleStyle={{color:'#5f00bc',fontSize:16, fontWeight:'bold', paddingTop:15}} />

                <Block flex={0} row space="around" style={{backgroundColor:'#f7f9ff'}}>
                    {/*Molecule search*/}
                    <SearchForm />
                </Block>
                <ScrollView style={{flex:1, marginBottom:25}}>
                    <Block>
                        <Text h5 style={{fontWeight:'bold', marginLeft:25, marginTop:25, marginBottom: 25, color:'#3998bf'}}>J</Text>
                        <Block card style={styles.container}>
                            <ListItem
                                key={1}
                                leftAvatar={{ source: { uri: 'https://eu.ui-avatars.com/api/?name=J+H&background=3998bf&color=fff' } }}
                                title="Julie Henri"
                                titleStyle={{fontWeight:'bold'}}
                                subtitle="View profile"
                                chevron={{color:'#5f00bc', size:25}}
                                containerStyle={{borderRadius:10}}
                            />
                        </Block>
                        <Block card style={styles.container}>
                            <ListItem
                                key={2}
                                leftAvatar={{ source: { uri: 'https://eu.ui-avatars.com/api/?name=J+M&background=3998bf&color=fff' } }}
                                title="Julien Massardo"
                                titleStyle={{fontWeight:'bold'}}
                                subtitle="View profile"
                                chevron={{color:'#5f00bc', size:25}}
                                containerStyle={{borderRadius:10}}
                            />
                        </Block>
                        <Block card style={styles.container}>
                            <ListItem
                                key={3}
                                leftAvatar={{ source: { uri: 'https://eu.ui-avatars.com/api/?name=J+P&background=3998bf&color=fff' } }}
                                title="Jean Parad"
                                titleStyle={{fontWeight:'bold'}}
                                subtitle="View profile"
                                chevron={{color:'#5f00bc', size:25}}
                                containerStyle={{borderRadius:10}}
                            />
                        </Block>
                    </Block>

                    <Block>
                        <Text h5 style={{fontWeight:'bold', marginLeft:25, marginTop:25, marginBottom: 25, color:'#5f00bc'}}>L</Text>
                        <Block card style={styles.container}>
                            <ListItem
                                key={4}
                                leftAvatar={{ source: { uri: 'https://eu.ui-avatars.com/api/?name=L+N&background=5f00bc&color=fff' } }}
                                title="Liam Nimard"
                                titleStyle={{fontWeight:'bold'}}
                                subtitle="View profile"
                                chevron={{color:'#5f00bc', size:25}}
                                containerStyle={{borderRadius:10}}
                            />
                        </Block>
                        <Block card style={styles.container}>
                            <ListItem
                                key={5}
                                leftAvatar={{ source: { uri: 'https://eu.ui-avatars.com/api/?name=L+R&background=5f00bc&color=fff' } }}
                                title="Laure Radon"
                                titleStyle={{fontWeight:'bold'}}
                                subtitle="View profile"
                                chevron={{color:'#5f00bc', size:25}}
                                containerStyle={{borderRadius:10}}
                            />
                        </Block>
                        <Block card style={styles.container}>
                            <ListItem
                                key={6}
                                leftAvatar={{ source: { uri: 'https://eu.ui-avatars.com/api/?name=L+S&background=5f00bc&color=fff' } }}
                                title="Léa Simon"
                                titleStyle={{fontWeight:'bold'}}
                                subtitle="View profile"
                                chevron={{color:'#5f00bc', size:25}}
                                containerStyle={{borderRadius:10}}
                            />
                        </Block>
                    </Block>

                    <Block>
                        <Text h5 style={{fontWeight:'bold', marginLeft:25, marginTop:25, marginBottom: 25, color:'#ffca18'}}>M</Text>
                        <Block card style={styles.container}>
                            <ListItem
                                key={7}
                                leftAvatar={{ source: { uri: 'https://eu.ui-avatars.com/api/?name=M+R&background=ffca18&color=fff' } }}
                                title="Margot Richarson"
                                titleStyle={{fontWeight:'bold'}}
                                subtitle="View profile"
                                chevron={{color:'#5f00bc', size:25}}
                                containerStyle={{borderRadius:10}}
                            />
                        </Block>
                    </Block>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop:5,
        marginBottom:5,
        marginLeft:20,
        marginRight:20,
        borderColor: 'transparent',
        // borderRadius:10,
        // shadowColor: '#686868',
        // shadowOffset: { width: 5, height: 5 },
        // shadowOpacity: 0.5,
        // shadowRadius: 1,
        // elevation: 5
    }
});

export default FriendsListTemplate;
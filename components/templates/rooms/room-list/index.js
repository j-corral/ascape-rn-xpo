import React from 'react';
import {ScrollView} from 'react-native';
import {Block, Card, Icon, theme} from 'galio-framework';

import TextButton from "../../../atoms/buttons/text-button";

// Organisms import
import RoomCalendar from "../../../organisms/rooms/room-calendar";
import {Dimensions} from "react-native-web";


export default class RoomListTemplate extends React.Component{

    randInt = () => {
        const min = Math.ceil(10);
        const max = Math.floor(900);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    randPicture = () => {
        let rand = this.randInt();
        let picture = "https://picsum.photos/id/"+rand+"/600/400";
        return picture;
    };

    render() {
        return (
            <Block flex={1} style={{backgroundColor:'#f7f9ff'}} >
                <RoomCalendar />
                <ScrollView>
                    <Block  style={{marginTop:25, marginBottom:25}} flex={1}>
                        <Block flex={1} row space="between">
                            <TextButton uppercase
                                        size="small"
                                        onPress={() => {}}
                                        textStyle={{color:'black', fontWeight:'bold', textAlign:'left'}}>
                                Hint Hunt Toulouse
                            </TextButton>
                            <TextButton onlyIcon
                                        icon="navigate-next"
                                        iconFamily="material-icons"
                                        iconColor="#5f00bc" iconSize={32}
                                        style={{marginTop:-10}}
                                        onPress={() => {}}/>
                        </Block>
                        <ScrollView horizontal={true} >
                            <Card width={350}
                                  borderless
                                  shadow
                                  style={{marginLeft:20, marginRight:20, backgroundColor:'#fff'}}
                                  title="Torpedo"
                                  location="12 place Esquirol - Toulouse, FR"
                                  imageBlockStyle={{ padding: theme.SIZES.BASE / 2 }}
                                  image={this.randPicture()}
                            />

                            <Card width={350}
                                  borderless
                                  shadow
                                  style={{marginLeft:20, marginRight:20, backgroundColor:'#fff'}}
                                  title="Torpedo"
                                  location="12 place Esquirol - Toulouse, FR"
                                  imageBlockStyle={{ padding: theme.SIZES.BASE / 2 }}
                                  image={this.randPicture()}
                            />

                            <Card width={350}
                                  borderless
                                  shadow
                                  style={{marginLeft:20, marginRight:20, backgroundColor:'#fff'}}
                                  title="Torpedo"
                                  location="12 place Esquirol - Toulouse, FR"
                                  imageBlockStyle={{ padding: theme.SIZES.BASE / 2 }}
                                  image={this.randPicture()}
                            />

                        </ScrollView>
                    </Block>

                    <Block  style={{marginTop:25, marginBottom:25}} flex={1}>
                        <Block flex={1} row space="between">
                            <TextButton uppercase
                                        size="small"
                                        onPress={() => {}}
                                        textStyle={{color:'black', fontWeight:'bold', textAlign:'left'}}>
                                Projet Dedale
                            </TextButton>
                            <TextButton onlyIcon
                                        icon="navigate-next"
                                        iconFamily="material-icons"
                                        iconColor="#5f00bc" iconSize={32}
                                        style={{marginTop:-10}}
                                        onPress={() => {}}/>
                        </Block>
                        <ScrollView horizontal={true} >
                            <Card width={350}
                                  borderless
                                  shadow
                                  style={{marginLeft:20, marginRight:20, backgroundColor:'#fff'}}
                                  title="Mission Arion"
                                  location="12 place Esquirol - Toulouse, FR"
                                  imageBlockStyle={{ padding: theme.SIZES.BASE / 2 }}
                                  image={this.randPicture()}
                            />

                            <Card width={350}
                                  borderless
                                  shadow
                                  style={{marginLeft:20, marginRight:20, backgroundColor:'#fff'}}
                                  title="Torpedo"
                                  location="12 place Esquirol - Toulouse, FR"
                                  imageBlockStyle={{ padding: theme.SIZES.BASE / 2 }}
                                  image={this.randPicture()}
                            />

                            <Card width={350}
                                  borderless
                                  shadow
                                  style={{marginLeft:20, marginRight:20, backgroundColor:'#fff'}}
                                  title="Torpedo"
                                  location="12 place Esquirol - Toulouse, FR"
                                  imageBlockStyle={{ padding: theme.SIZES.BASE / 2 }}
                                  image={this.randPicture()}
                            />

                        </ScrollView>
                    </Block>

                    <Block  style={{marginTop:25, marginBottom:25}} flex={1}>
                        <Block flex={1} row space="between">
                            <TextButton uppercase
                                        size="small"
                                        onPress={() => {}}
                                        textStyle={{color:'black', fontWeight:'bold', textAlign:'left'}}>
                                La cellule
                            </TextButton>
                            <TextButton onlyIcon
                                        icon="navigate-next"
                                        iconFamily="material-icons"
                                        iconColor="#5f00bc" iconSize={32}
                                        style={{marginTop:-10}}
                                        onPress={() => {}}/>
                        </Block>
                        <ScrollView horizontal={true} >
                            <Card width={350}
                                  borderless
                                  shadow
                                  style={{marginLeft:20, marginRight:20, backgroundColor:'#fff'}}
                                  title="Le bureau du général"
                                  location="12 place Esquirol - Toulouse, FR"
                                  imageBlockStyle={{ padding: theme.SIZES.BASE / 2 }}
                                  image={this.randPicture()}
                            />

                            <Card width={350}
                                  borderless
                                  shadow
                                  style={{marginLeft:20, marginRight:20, backgroundColor:'#fff'}}
                                  title="Torpedo"
                                  location="12 place Esquirol - Toulouse, FR"
                                  imageBlockStyle={{ padding: theme.SIZES.BASE / 2 }}
                                  image={this.randPicture()}
                            />

                            <Card width={350}
                                  borderless
                                  shadow
                                  style={{marginLeft:20, marginRight:20, backgroundColor:'#fff'}}
                                  title="Torpedo"
                                  location="12 place Esquirol - Toulouse, FR"
                                  imageBlockStyle={{ padding: theme.SIZES.BASE / 2 }}
                                  image={this.randPicture()}
                            />

                        </ScrollView>
                    </Block>
                </ScrollView>
            </Block>
        )
    }
}
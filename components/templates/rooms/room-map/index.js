import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Block, Text} from 'galio-framework';
// import MapView from 'react-native-maps';

// Organisms import
import RoomToolbar from "../../../organisms/rooms/room-toolbar";

export default class RoomMapTemplate extends React.Component{

    render() {
        return (
            <Block flex={1} middle>
                <Text>room map</Text>
                {/*<MapView style={styles.mapStyle} region={Props.region} />*/}
            </Block>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 200,
    },
});

const Props = {
    region: {
        latitude: 43.6008029,
        longitude: 1.3628014,
        latitudeDelta: 0,
        longitudeDelta: 1,
    },
};
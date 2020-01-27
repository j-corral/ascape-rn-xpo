import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Block} from 'galio-framework';
import MapView, {Marker} from 'react-native-maps';
import RoomCalendar from "../../../organisms/rooms/room-calendar";

// Organisms import

export default class RoomMapTemplate extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            markers: [
                {
                    id:1,
                    latlng: {
                        latitude: 43.6111832,
                        longitude: 1.4351475,
                    },
                    title:'HintHunt',
                    description: 'Missions: \nTorpedo\nDeep Down',
                },
            ],
        };
    }

    render() {
        return (
            <Block flex={1} space="around" style={{backgroundColor:'#f7f9ff', paddingTop:50}}>
                <RoomCalendar />
                <Block >
                    <MapView style={styles.mapStyle} region={Props.region}>
                        {this.state.markers.map(marker => (
                            <Marker
                                key={marker.id}
                                coordinate={marker.latlng}
                                title={marker.title}
                                description={marker.description}
                            />
                        ))}
                    </MapView>
                </Block>
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
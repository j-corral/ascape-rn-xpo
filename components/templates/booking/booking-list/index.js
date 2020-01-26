import React from 'react';
import {SafeAreaView, StatusBar, ActivityIndicator, StyleSheet} from "react-native";
import {NavBar, Block, Text, Button} from "galio-framework";
import {Image, Avatar} from "react-native-elements";

class BookingListTemplate extends React.Component {
    render() {
        return (
            <SafeAreaView style={{flex:1, backgroundColor:'#f7f9ff'}}>
                <StatusBar barStyle="dark-content" />
                <NavBar title="Bookings" style={{backgroundColor:'#f7f9ff'}} titleStyle={{color:'#5f00bc',fontSize:16, fontWeight:'bold', paddingTop:15}} />

                <Text h5 style={{color:'#9cd7f1', fontWeight:'bold', marginLeft:25, marginTop:25, marginBottom: 25}}>Next missions</Text>
                <Block width={350} card style={styles.container}>
                    <Text h4> HintHunt</Text>
                    <Text h5 style={{color:'#686868', padding:10}}> Mission Torpedo</Text>
                    <Text style={{color:'#989898', padding:10}}> 2020-01-28 19:00</Text>
                    <Block flex={1} row space="evenly" style={styles.team}>
                        <Avatar rounded source={{uri:'https://jonathan-corral.xyz/wp-content/uploads/2018/08/me.jpg'}} />
                        <Avatar rounded source={{uri:'https://eu.ui-avatars.com/api/?name=L+N&background=5f00bc&color=fff'}} />
                        <Avatar rounded source={{uri:'https://eu.ui-avatars.com/api/?name=M+R&background=ffca18&color=fff'}} />
                    </Block>
                    <Block flex={0} middle style={styles.qrcode}>
                        <Image source={{uri: 'https://www.unitag.io/qreator/generate?crs=xnjFkEn%252FP85fCPDXJ%252FXXKhEQqj5eYw4o5X81LfAdSDDvKGjU6sE%252Bpofz0aNx6Q4g2v78DU9YoLMDwJU7ORr0dFVd1I95y0pwoodo54VzPwdAUAMlr4B7BCJUWvUCPI6sN%252Fz5HhEpKb06bTjgW4OSyA%253D%253D&crd=fhOysE0g3Bah%252BuqXA7NPQx2rrS2o9rjHfmG68tV%252F4kwXXQOuMFbB3Mg9ML8luNW9bSOMfiWKGnIQP7LClPYlpw%253D%253D'}}
                               style={{ width: 200, height: 200 }}
                               PlaceholderContent={<ActivityIndicator />}
                        />
                    </Block>
                    <Block middle style={styles.team}>
                        <Button uppercase
                                size="small"
                                color="#fd003a"
                                round
                                onPress={() => {}}
                                textStyle={{color:'white', fontWeight:'bold', textAlign:'left'}}>
                            Abort Mission
                        </Button>
                    </Block>
                </Block>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop:5,
        marginBottom:5,
        marginLeft:20,
        marginRight:20,
        borderColor: 'transparent',
        borderRadius:10,
        shadowColor: '#686868',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 5
    },
    team: {
        marginTop: 15,
        marginBottom: 15,
    },
    qrcode: {
        marginTop: 30,
        marginBottom: 30,
    },
});

export default BookingListTemplate;
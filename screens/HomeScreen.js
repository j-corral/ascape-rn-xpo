import React from 'react';
import {Text, View, Button, AsyncStorage} from 'react-native';

/**
 * HomeScreen class
 * @author Jonathan Corral
 * @version 0.1
 * @since 0.1
 * @package screens
 */
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  /**
   * Description of doSignOut
   * @author Jonathan Corral
   * @version 0.1
   * @since 0.1
   *
   * @return {Promise<boolean|NavigationNavigateAction|WindowClient|null>}
   * @private
   */
  _doSignOut = async () => {
    await AsyncStorage.clear();
    return this.props.navigation.navigate('Auth');
  };

  /**
   * Description of render
   * @author Jonathan Corral
   * @version 0.1
   * @since 0.1
   *
   * @return {*}
   */
  render() {
    return (
        <View>
          <Text>Home</Text>
          <Button title="Actually, sign me out :)" onPress={() => {this._doSignOut()}} />
        </View>
    );
  }
}

export default HomeScreen;

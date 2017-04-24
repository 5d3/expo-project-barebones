import React from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';

// https://docs.expo.io/versions/v16.0.0/sdk/map-view.html
// https://docs.expo.io/versions/v16.0.0/sdk/location.html
import { Permissions, MapView, Location } from 'expo';

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      latitude: 37.78825,
      longitude: -122.4324
    };

    this.getPositionPerm = this.getPositionPerm.bind(this);
  }

  componentDidMount() {
    this.getPositionPerm();
  }

  async getPositionPerm() {
    const options = {
      enableHighAccuracy: true,
    };

    const { status } = await Permissions.getAsync(Permissions.LOCATION);

    if (status === 'denied') {
      Alert.alert('Please allow Location permission from your phone configuration');
    } else {
      const { status } = await Permissions.askAsync(Permissions.LOCATION);

      if (status === 'granted') {
        const response = await Location.getCurrentPositionAsync(options);

        this.setState({
          latitude: response.coords.latitude,
          longitude: response.coords.longitude,
        });
      }
    }
  }

  render() {
    let { latitude, longitude } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Expo.MapView
        </Text>

        <MapView
          style={{flex: 1}}
          region={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          <MapView.Marker
            coordinate={{
              latitude: latitude,
              longitude: longitude,
            }}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginTop: 20,
    marginBottom: 10
  },
});

export default App;

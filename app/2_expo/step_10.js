import React from 'react';
import {
  Text, View, StyleSheet
} from 'react-native';

// https://docs.expo.io/versions/v16.0.0/sdk/video.html
import { Video } from 'expo';

class App extends React.Component {
  constructor(){
    super()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Expo.Video
        </Text>

        <Video
          source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode="cover"
          repeat
          style={{ width: 300, height: 300 }}
        />
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
  }
});

export default App;

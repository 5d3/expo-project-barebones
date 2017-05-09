import React from 'react';
import {
  View, Text, Button,
  Image, StyleSheet,
} from 'react-native';

// https://docs.expo.io/versions/v16.0.0/sdk/imagepicker.html
import { ImagePicker, Permissions } from 'expo';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      hasPerm: true,
      cancelled: true,
      fileSize: null,
      uri: null,
    };

    this.getCameraPerm = this.getCameraPerm.bind(this);
    this.openCamera = this.openCamera.bind(this);
    this.openImageLibrary = this.openImageLibrary.bind(this);
  }

  componentDidMount() {
    this.getCameraPerm();
  }

  async getCameraPerm() {
    const { status } = await Permissions.getAsync(Permissions.CAMERA);

    if (status === 'denied') {
      Alert.alert('Please allow Camera permission from your phone configuration');
    } else {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);

      if (status === 'granted') {
        this.setState({
          hasPerm: true,
        });
      } else {
        Alert.alert('Please allow Camera permission from your phone configuration');
      }
    }
  }

  async openCamera() {
    const options = {
      allowsEditing: true,
      aspect: [4, 3],
    };

    const { cancelled, fileSize, uri } = await ImagePicker.launchCameraAsync(options);

    if (!cancelled) {
      this.setState({ cancelled, fileSize, uri });
    }
  }

  async openImageLibrary() {
    const options = {
      allowsEditing: true,
      aspect: [4, 3],
    };

    const { cancelled, fileSize, uri } = await ImagePicker.launchImageLibraryAsync(options);

    if (!cancelled) {
      this.setState({ cancelled, fileSize, uri });
    }
  }

  render() {
    const { cancelled, fileSize, uri } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Expo.ImagePicker
        </Text>

        <Button onPress={this.openCamera} title={'Open camera'} />

        <Button onPress={this.openImageLibrary} title={'Open image library'} />

        { fileSize && <Text>size: {fileSize}</Text> }
        { uri && <Image
          source={{ uri }}
          style={styles.image}
        />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginTop: 20,
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default App;

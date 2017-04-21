import React from 'react';
import {
  View, Text, StyleSheet,
  TouchableOpacity, Image, Button, Alert
} from 'react-native';

// https://docs.expo.io/versions/v16.0.0/sdk/audio.html
import { Audio, Permissions } from 'expo';

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      hasPerm: false,
      isRecording: false,
      canRecord: false,
      isDoneRecording: false,
      recording: null,
      sound: null
    };

    this.startRecording = this.startRecording.bind(this);
    this.stopRecording = this.stopRecording.bind(this);
    this.playSound = this.playSound.bind(this);
  }

  async componentDidMount() {
    // Audio is disabled by default, so your app must enable it explicitly.
    Audio.setIsEnabledAsync(true);
    Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentLockedModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    });

    const { status } = await Permissions.getAsync(Permissions.AUDIO_RECORDING);

    if (status === 'denied') {
      Alert.alert('Please allow Location permission from your phone configuration');
    } else {
        const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING)

        if (status === 'granted') {
          this.setState({
            hasPerm: true
          });
        } else {
          Alert.alert('Please allow Location permission from your phone configuration');
        }
    }
  }

  async startRecording() {
    if (this.state.hasPerm) {
      const recording = new Audio.Recording();
      const prepareRecording = await recording.prepareToRecordAsync();
      const startRecording = await recording.startAsync();

      this.setState({
        ...prepareRecording,
        ...startRecording,
        sound: null,
        recording
      });
    }
  }

  async stopRecording() {
    const { recording } = this.state;
    const stopRecording = await recording.stopAndUnloadAsync();
    const sound = await recording.getNewSound();

    this.setState({
      ...stopRecording,
      isRecording: false,
      sound
    });
  }

  async playSound() {
    const { sound } = this.state;
    const status = await sound.getStatusAsync();

    if (status.isLoaded) {
      await sound.setPositionAsync(0);
      await sound.playAsync();
    } else {
      await sound.loadAsync();
      await sound.playAsync();
    }
  }

  render() {
    const { isRecording, sound, isDoneRecording } = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={isRecording ? this.stopRecording : this.startRecording}
        >
          <Image
            style={styles.mic}
            source={require('../../assets/mic.png')}
          />
        </TouchableOpacity>

        <Text>
          {isRecording ? "Recording...... click again to stop" : "Click the image to start recording"}
        </Text>

        { sound && isDoneRecording &&
          <Button
            color={'#D7263D'}
            onPress={this.playSound}
            title={"Play recorded sound!"}
          />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mic: {
    width: 160,
    height: 160,
    marginBottom: 20
  },
});

export default App;

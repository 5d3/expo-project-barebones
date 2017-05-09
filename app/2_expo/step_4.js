import React from 'react';
import {
  View, Button, Image,
  StatusBar, StyleSheet,
} from 'react-native';

// https://docs.expo.io/versions/v16.0.0/sdk/blur-view.html
import { BlurView } from 'expo';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      showBlur: false,
    };

    this.toggleBlur = this.toggleBlur.bind(this);
  }

  toggleBlur() {
    this.setState({
      showBlur: !this.state.showBlur,
    });
  }

  render() {
    const { showBlur } = this.state;

    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: 'https://s13.postimg.org/wflosfalj/logo.png' }}
        />

        <BlurView
          // default, light, dark
          tint="dark"
          intensity={showBlur ? 80 : 0}
          style={[styles.blurContainer, StyleSheet.absoluteFill]}
        >
          <Button
            onPress={this.toggleBlur}
            color={showBlur ? 'red' : 'blue'}
            title={showBlur ? 'Remove BlurView' : 'Add BlurView'}
          />
        </BlurView>

        <StatusBar hidden />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  blurContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default App;

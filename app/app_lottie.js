import React from 'react';
import {
  View, Text, StyleSheet,
  Animated,
} from 'react-native';

import { DangerZone } from 'expo';
const { Lottie: Animation } = DangerZone;

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      progress: new Animated.Value(0),
    };

    this.playAnimation = this.playAnimation.bind(this);
  }

  componentDidMount() {
    this.playAnimation();
  }

  playAnimation() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 5000,
    }).start(() => {
      this.setState({ progress: new Animated.Value(0) });

      this.playAnimation();
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Animation example using Lottie
        </Text>

        <View style={styles.animationContainer}>
          <Animation
            style={{
              width: 200,
              height: 200
            }}
            source={require('../assets/data.json')}
            progress={this.state.progress}
            speed={1}
          />
        </View>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50'
  },
  animationContainer: {
    backgroundColor: '#eee',
    marginVertical: 50,
    borderRadius: 30
  }
});

export default App;

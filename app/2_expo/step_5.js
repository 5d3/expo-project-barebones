import React from 'react';
import {
  View, Text, StyleSheet,
  Platform, Button,
} from 'react-native';

// https://docs.expo.io/versions/v16.0.0/sdk/constants.html
// https://docs.expo.io/versions/v16.0.0/sdk/util.html
import { Constants, Util } from 'expo';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      locale: null,
    };

    this.getLocale = this.getLocale.bind(this);
  }

  async getLocale() {
    const locale = await Util.getCurrentLocaleAsync();

    this.setState({ locale });
  }

  reload() {
    Util.reload();
  }

  render() {
    const {
      appOwnership, expoVersion, deviceName,
      deviceYearClass, isDevice, platform,
    } = Constants;

    const { locale } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Expo.Constants
        </Text>

        <Text>appOwnership: {appOwnership}</Text>
        <Text>expoVersion: {expoVersion}</Text>
        <Text>deviceName: {deviceName}</Text>
        <Text>deviceYearClass: {deviceYearClass}</Text>
        <Text>isDevice: {isDevice ? 'true' : 'false'}</Text>
        { Platform.OS === 'ios' && <Text>platform: {platform.ios.platform}</Text> }
        { Platform.OS === 'ios' && <Text>model: {platform.ios.model}</Text> }

        <Text style={styles.title}>
          Expo.Util
        </Text>

        <Button onPress={this.getLocale} title={'getCurrentLocaleAsync'} />
        <Text>getCurrentLocaleAsync: {locale}</Text>

        <Button onPress={this.reload} title={'Reload app'} />
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
});

export default App;

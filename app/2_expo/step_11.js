import React from 'react';
import {
  Text, View, TextInput,
  Button, Alert, StyleSheet,
} from 'react-native';

// https://docs.expo.io/versions/v16.0.0/sdk/notifications.html
import { Permissions, Notifications } from 'expo';

const PUSH_ENDPOINT = 'https://powerful-sea-10435.herokuapp.com/notification';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      notificationPerm: '',
      token: '',
      title: '',
      description: '',
      delay: '',
    };

    this.registerForPushNotificationsAsync = this.registerForPushNotificationsAsync.bind(this);
    this.sendPushNotification = this.sendPushNotification.bind(this);
  }

  componentWillMount() {
    this.registerForPushNotificationsAsync();

    // Handle notifications that are received or selected while the app
    // is open. If the app was closed and then opened by tapping the
    // notification (rather than just tapping the app icon to open it),
    // this function will fire on the next tick after the app starts
    // with the notification data.
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = (notification) => {
    const { title, description } = notification.data;

    Alert.alert(
      title || 'Push notification',
      description || 'Push notification',
      [{ text: 'OK', onPress: () => {} }],
    );
  };

  registerForPushNotificationsAsync = async () => {
    const { existingStatus } = await Permissions.getAsync(Permissions.REMOTE_NOTIFICATIONS);
    let finalStatus = existingStatus;

    // only ask if permissions have not already been determined
    if (existingStatus !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS);
      finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
      return;
    }

    // Get the token that uniquely identifies this device
    const token = await Notifications.getExponentPushTokenAsync();

    this.setState({
      notificationPerm: finalStatus,
      token,
    });
  }

  sendPushNotification() {
    const { token, title, description, delay } = this.state;
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token,
        title,
        description,
        delay,
      }),
    };

    fetch(PUSH_ENDPOINT, options)
    .then(() => {
      this.setState({
        title: '',
        description: '',
      });
    });
  }

  render() {
    const { notificationPerm, token } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Expo.Notifications
        </Text>

        <Text>
          Notifications permission: {notificationPerm.toUpperCase() || 'cannot get permission'}
        </Text>

        <Text style={styles.text}>
          {token || 'cannot get token'}
        </Text>

        <TextInput
          style={styles.textInput}
          onChangeText={token => this.setState({ token })}
          value={this.state.token}
          autoCorrect={false}
          placeholder={'Token'}
          underlineColorAndroid={'transparent'}
          keyboardAppearance={'dark'}
          returnKeyType={'send'}
        />

        <TextInput
          style={styles.textInput}
          onChangeText={title => this.setState({ title })}
          value={this.state.title}
          autoCorrect={false}
          placeholder={'Title'}
          underlineColorAndroid={'transparent'}
          keyboardAppearance={'dark'}
          returnKeyType={'send'}
        />

        <TextInput
          style={styles.textInput}
          onChangeText={description => this.setState({ description })}
          value={this.state.description}
          autoCorrect={false}
          placeholder={'Description'}
          underlineColorAndroid={'transparent'}
          keyboardAppearance={'dark'}
          returnKeyType={'send'}
        />

        <TextInput
          style={styles.textInput}
          onChangeText={delay => this.setState({ delay })}
          value={this.state.delay}
          autoCorrect={false}
          placeholder={'Delay (milliseconds)'}
          underlineColorAndroid={'transparent'}
          keyboardAppearance={'dark'}
          returnKeyType={'send'}
          keyboardType={'numeric'}
        />

        <Button
          onPress={this.sendPushNotification}
          title={'Send push notification'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    marginBottom: 20,
  },
  textInput: {
    alignSelf: 'stretch',
    height: 35,
    color: '#333',
    fontSize: 15,
    borderRadius: 3,
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 5,
    marginBottom: 15,
  },
});

export default App;


import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import Login from './src/screens/Login';
import { initializeFirebaseApi, currentFirebaseUser } from './src/services/FirebaseApi';

export default class App extends Component {

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);

    initializeFirebaseApi();
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator style={styles.loading} />
      </View>
    );
  }

  componentDidMount() {
    currentFirebaseUser()
      .then( (user) => {

        if (user) {
          this.props.navigation.navigate('Task');
        } else {
          this.props.navigation.navigate('Login');
        }

      });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loading: {
    width: 50,
    height: 50
  }
});

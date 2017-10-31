
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.main}>
        
        <View style={styles.topView}>
          <View style={styles.topViewChild01}></View>
          <View style={styles.topViewChild02}></View>
          <View style={styles.topViewChild03}></View>
        </View>

        <View style={styles.bottomView}>
          <View style={styles.topViewChild01}></View>
          <View style={styles.topViewChild02}></View>
          <View style={styles.topViewChild03}></View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    main: {
      flex: 1, flexDirection: 'column'
    },
    topView: {
      flex: 1, flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-end', margin: 40,
      borderColor: 'red', borderWidth: 1
    },
    topViewChild01: {
      height: 50, width: 50,
      backgroundColor: 'powderblue'
    },
    topViewChild02: {
      height: 50, width: 50,
      backgroundColor: 'skyblue'
    },
    topViewChild03: {
      height: 50, width: 50,
      backgroundColor: 'steelblue'
    },
    bottomView: {
      flex: 1, flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-end', margin: 40,
      borderColor: 'red', borderWidth: 1
    },
});

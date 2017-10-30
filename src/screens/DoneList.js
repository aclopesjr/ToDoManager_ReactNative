import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const imgDone = require('../assets/done.png');

export default class DoneList extends Component {

    static navigationOptions = {
        tabBarLabel: 'Done',
        tabBarIcon: ({ tintColor }) => (
          <Image source={imgDone} style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      };

    render() {
        return (
            <View style={styles.pageStyle}>
                <Text>DONE LIST</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    pageStyle: {
        alignItems: 'center',
        padding: 20,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    icon: {
        width: 26,
        height: 26,
    },
    topView: {
        flex: 0.20,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 25
    },
    img: {
        width: 50,
        height: 50
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20
    },
    bottomView: {
        flex: 1,
        flexDirection: 'column',
        paddingRight: 20,
        paddingLeft: 20
    },
    input: {
        marginBottom: 20
    }
});

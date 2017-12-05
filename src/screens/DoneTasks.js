import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';

const imgPlus = require('../assets/plus_64.png');
const imgCheckList = require('../assets/done.png');

export default class DoneTasks extends Component {

    render() {
        return(
            <View style={styles.container}>

                <TouchableOpacity style={styles.floatButton}>
                    <Image source={imgPlus} style={styles.img}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 10,
        paddingRight: 10
    },
    floatButton: {
        position: 'absolute',
        right: 20,
        bottom: 20
    },
    img: {
        width: 50,
        height: 50
    }
});
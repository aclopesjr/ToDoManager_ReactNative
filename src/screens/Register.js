import React, { Component } from 'react';
import {
    View, Image, TextInput,
    Button, StyleSheet, KeyboardAvoidingView, Text
} from 'react-native';

const img = require('../assets/TodoList.png');

export default class Register extends Component {

    render() {
        return(
            <KeyboardAvoidingView style={styles.container}
                behavior='padding'>
                <View style={styles.topView}>
                    <Image style={styles.img} source={img}/>
                    <Text style={styles.title}>Registering new user</Text>
                </View>
                <View style={styles.bottomView}>
                    <TextInput style={styles.input}
                        placeholder='Email'
                        keyboardType={'email-address'}/>
                    <TextInput style={styles.input}
                        placeholder='Password'
                        secureTextEntry={true}/>
                    <Button title='Register'/>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
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
        flexDirection: 'column',
        paddingRight: 20,
        paddingLeft: 20
    },
    input: {
        marginBottom: 20
    }
});

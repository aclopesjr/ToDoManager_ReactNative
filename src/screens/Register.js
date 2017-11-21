import React, { Component } from 'react';
import {
    View, Image, TextInput,
    Button, StyleSheet, KeyboardAvoidingView, Text,
    Alert
} from 'react-native';
import { createUserOnFirebase } from '../services/FirebaseApi';
import { NavigationActions } from 'react-navigation';

const img = require('../assets/TodoList.png');

export default class Register extends Component {

    static navigationOptions = {
        title: 'Register'
    }

    constructor(props) {
        super(props);

        this.state = { email: '', password: '' };
    }

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
                        keyboardType={'email-address'}
                        onChangeText={ (email) => this.setState({ email })}/>
                    <TextInput style={styles.input}
                        placeholder='Password'
                        secureTextEntry={true}
                        onChangeText={ (password) => this.setState({ password })}/>
                    <Button title='Register'
                        onPress={ () => this.registerUser()}/>
                </View>
            </KeyboardAvoidingView>
        );
    }

    registerUser() {
        
        createUserOnFirebase(this.state.email, this.state.password)
            .then( (user) => {
                Alert.alert('User Created',
                    `User ${this.state.email} created!`,
                [{
                    text: 'Ok', onPress: ( () => {
                        let backAction = NavigationActions.back({key: null});
                        this.props.navigation.dispatch(backAction);
                    })
                }]);
            })
            .catch( (error) =>
            {
                Alert.alert('Creation User Failed', error.message);
            });


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

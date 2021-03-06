import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { initializeFirebaseApi, currentFirebaseUser } from './services/FirebaseApi';


export default class App extends Component {
    
    constructor(props) {
        super(props);
        initializeFirebaseApi();
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator style={styles.loading}/>
            </View>
        );
    }

    componentDidMount() {
        const { navigate } = this.props.navigation;
        currentFirebaseUser()
            .then( (user) => {
                if (user) {
                    navigate('TaskList');        
                } else {
                    navigate('Login');        
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
})

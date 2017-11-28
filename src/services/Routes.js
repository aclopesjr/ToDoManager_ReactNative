import React from 'react';
import { StackNavigator } from 'react-navigation';
import App from '../../App';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Task from '../screens/Task';

export const Routes = StackNavigator({
    App: { screen: App },
    Login: { screen: Login },
    Register: { screen: Register },
    Task: { screen: Task }
},
{
    headerMode: 'screen'
});

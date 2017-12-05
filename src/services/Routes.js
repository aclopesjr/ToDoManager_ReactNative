import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import App from '../../App';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Task from '../screens/Task';
import ToDoTasks from '../screens/ToDoTasks';
import DoneTasks from '../screens/DoneTasks';

const MainScreenTabNavigator = TabNavigator({
    ToDoTasks: { screen: ToDoTasks, title: 'To Do' },
    DoneTasks: { screen: DoneTasks, title: 'Done' }
});

export const Routes = StackNavigator({
    App: { screen: App },
    Login: { screen: Login },
    Register: { screen: Register },
    Task: { screen: Task },
    TasksList: {
        screen: MainScreenTabNavigator,
        navigationOptions: {
            title: 'Tasks List',
            headerLeft: null
        }
    }
},
{
    headerMode: 'screen'
});

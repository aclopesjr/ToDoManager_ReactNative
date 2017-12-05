import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, SectionList, Text } from 'react-native';
import { readTaskFromFirebase } from '../services/FirebaseApi';

const imgPlus = require('../assets/plus_64.png');
const imgCheckList = require('../assets/checklist.png');

export default class ToDoTasks extends Component {

    static navigationOptions = {
        tabBarLabel: 'To Do', 
        tabBarIcon: ({ tintColor }) => (
            <Image source={imgCheckList} style={[ styles.icon, {tintColor: tintColor}]}/>
        )
    }

    constructor(props) {
        super(props);
        this.state = { tasks: [] };
    }

    componentWillMount() {
        readTaskFromFirebase(this.fetchTasks);
    }

    render() {
        return(
            <View style={styles.container}>
                <SectionList renderSectionHeader={ (section) =>
                    this.renderSectionHeader(section)
                }
                sections={
                    [
                        {
                            data: this.state.tasks.filter((data) => {
                                return data.priority && !data.isDone
                            }),
                            key: "highPriority",
                            title: 'High Priority'
                        },
                        {
                            data: this.state.tasks.filter((data) => {
                                return !data.priority && !data.isDone
                            }),
                            key: "lowPriority",
                            title: 'Low Priority'
                        }
                    ]}
                    renderItem={(data) => this.renderItem(data)} />

                <TouchableOpacity style={styles.floatButton} onPress={() => this.createTask()}>
                    <Image source={imgPlus} style={styles.img} />
                </TouchableOpacity>
            </View>
        );
    }

    renderSectionHeader(sectionData) {
        return (
            <View style={styles.headerConteiner}>
                <View style={styles.headerTagConteiner}>
                    <Text style={styles.headerTagText}>{sectionData.section.title.substr(0, 1)}</Text>
                </View>
                <Text style={styles.headerText}>{sectionData.section.title}</Text>
            </View>
        );
    }

    renderItem(itemData) {
        return (
            <TouchableOpacity>
                <View style={styles.itemConteiner}>
                    <Text style={styles.itemTextTitle}>{itemData.item.title}</Text>
                    <Text>{itemData.item.resume}</Text>
                </View>
            </TouchableOpacity>);
    }

    fetchTasks = (tasks) => {
        this.setState({tasks});
    }

    createTask() {
        this.props.navigation.navigate('Task');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 10,
        paddingRight: 10
    },
    icon: {
        width: 26,
        height: 26
    },
    floatButton: {
        position: 'absolute',
        right: 20,
        bottom: 20
    },
    img: {
        width: 50,
        height: 50
    },
    headerConteiner: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'silver',
        borderRadius: 25,
        marginTop: 20
    },
    headerTagConteiner: {
        backgroundColor: 'gray',
        height: 35,
        width: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25
    },
    headerTagText: {
        color: '#FFF',
        fontSize: 22
    },
    itemConteiner: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F3F2F0',
        marginTop: 5,
        padding: 10
    },
    itemTextTitle: {
        fontSize: 22
    },
    headerText: {
        fontSize: 16,
        marginLeft: 10
    }
});
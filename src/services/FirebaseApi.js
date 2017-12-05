import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDtVC3VQ1Z8XzQYDkWwnTOC_NFo8ny5c90",
    authDomain: "todomanager-5444a.firebaseapp.com",
    databaseURL: "https://todomanager-5444a.firebaseio.com",
    projectId: "todomanager-5444a",
    storageBucket: "todomanager-5444a.appspot.com",
    messagingSenderId: "254572727152"
};

export const initializeFirebaseApi = () => {
    firebase.initializeApp(config);
}

var firebaseUser = null;

export function currentFirebaseUser() {

    return new Promise((resolve, reject) => {

        var funcUnsubscribe = null;
        funcUnsubscribe = firebase.auth().onAuthStateChanged(
            (user) => {
                firebaseUser = user;
                resolve(user);
            }, (error) => {
                reject(error);
            }, (completed) => {
                funcUnsubscribe();
            });
    });
}

export function createUserOnFirebase(email, password) {
    return firebase.auth()
        .createUserWithEmailAndPassword(email, password);
}

export function signInOnFirebase(email, password) {
    return firebase.auth()
        .signInWithEmailAndPassword(email, password);
}

export function writeTaskOnFirebase(data) {
    const key = firebase.database()
        .ref(firebaseUser.uid)
        .child('tasks')
        .push().key;

    return firebase.database()
        .ref(firebaseUser.uid)
        .child('tasks/' + key)
        .update(data);
}

export function readTaskFromFirebase(listener) {
    const tasksReference = firebase
        .database()
        .ref(firebaseUser.uid)
        .child('tasks');

        tasksReference.on('value', (snapshot) => {
            var tasks = [];
            snapshot.forEach( (element) => {
                var task = element.val();
                task.key = element.key;
                tasks.push(task);
            });
        listener(tasks);
    });
}

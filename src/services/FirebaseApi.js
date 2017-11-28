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

export function currentFirebaseUser() {

    return new Promise( (resolve, reject) => {
        
        var funcUnsubscribe = null;
        funcUnsubscribe = firebase.auth().onAuthStateChanged(
            (user) => {
            resolve(user);
        }, (error) => {
            reject(error);
        }, (completed) => {
            funcUnsubscribe();
        });

    } );
}

export function createUserOnFirebase(email, password) {
    return firebase.auth()
        .createUserWithEmailAndPassword(email, password);
    // return new Promise( (resolse, reject) => {

    //     firebase.auth()
    //         .createUserWithEmailAndPassword(email, password)
    //         .then( (success) => {
    //             resolse(success);
    //         })
    //         .catch( (error) => {
    //             reject(error);
    //         });

    // });
}

export function signInOnFirebase(email, password) {

    return firebase.auth()
        .signInWithEmailAndPassword(email, password);

    // return new Promise( (resolve, reject) => {

    //     firebase.auth()
    //         .signInWithEmailAndPassword(email, password)
    //         .then( (success) => {
    //             resolve(success);
    //         })
    //         .catch( (error) => {
    //             reject(error);
    //         });

    // });
}

import { AngularFireAuth } from '@angular/fire/auth';

import * as firebase from 'firebase';

import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    private providers: {
        googleProvider: firebase.auth.GoogleAuthProvider,
        facebookProvider: firebase.auth.FacebookAuthProvider,
        emailProvider: firebase.auth.EmailAuthProvider
    };

    constructor(public afAuth: AngularFireAuth) {
        this.providers = {
            googleProvider: new firebase.auth.GoogleAuthProvider(),
            facebookProvider: new firebase.auth.FacebookAuthProvider(),
            emailProvider: new firebase.auth.EmailAuthProvider()
        };
    }

    loginWithGoogle() {
        return this.afAuth.auth.signInWithPopup(this.providers.googleProvider);
    }

    loginWithFacebook() {
        return this.afAuth.auth.signInWithPopup(this.providers.facebookProvider);
    }

    loginWithEmail() {
        return this.afAuth.auth.signInWithPopup(this.providers.emailProvider);
    }

    logout() {
        return firebase.auth().signOut();
    }
}

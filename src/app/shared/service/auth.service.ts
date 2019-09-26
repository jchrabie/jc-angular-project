import { AngularFireAuth } from '@angular/fire/auth';

import * as firebase from 'firebase';

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class AuthService {
    private providers: {
        googleProvider: firebase.auth.GoogleAuthProvider,
        facebookProvider: firebase.auth.FacebookAuthProvider,
        emailProvider: firebase.auth.EmailAuthProvider
    };

    public user$: Subject<firebase.User> = new Subject<firebase.User>();
    public user: firebase.User;

    constructor(
        public afAuth: AngularFireAuth,
        private _snackBar: MatSnackBar,
    ) {
        this.providers = {
            googleProvider: new firebase.auth.GoogleAuthProvider(),
            facebookProvider: new firebase.auth.FacebookAuthProvider(),
            emailProvider: new firebase.auth.EmailAuthProvider()
        };

        firebase.auth().onAuthStateChanged(user => {
            this.user = user;

            this.user$.next(this.user);
            this._snackBar.open(`Bonjour ${this.user.displayName}!`, '', { duration: 4000 });
        });
    }

    loginWithGoogle() {
        return this.afAuth.auth.signInWithPopup(this.providers.googleProvider);
    }

    loginWithFacebook() {
        return this.afAuth.auth.signInWithPopup(this.providers.facebookProvider);
    }

    createWithEmail(formValues: any) {
        return new Promise((resolve, reject) => {
            this.afAuth.auth.createUserWithEmailAndPassword(formValues.email, formValues.password)
                .then(userCredential => userCredential.user.updateProfile({
                        displayName: `${formValues.firstName} ${formValues.lastName}`,
                        photoURL: 'https://example.com/jane-q-user/profile.jpg'
                    })
                    .then(user => resolve(user))
                    .catch(err => reject(err)))
                .catch(err => reject(err));
        });
    }

    loginWithEmail(email: string, password: string) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }

    logout() {
        return firebase.auth().signOut().then(() => this._snackBar.open(`A bientôt !`, '', { duration: 4000 }));
    }

    resetPassword(email: string) {
        return firebase.auth().sendPasswordResetEmail(email);
    }
}

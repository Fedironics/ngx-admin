import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable(
)
export class AuthGuard implements CanActivate {

    private isLogged: boolean = false;
    constructor(private afAuth: AngularFireAuth,  private router: Router) {

    }


    canActivate() {
        this.afAuth.authState.subscribe(res =>  {
            if (res && res.uid) {
                this.isLogged = true;
                console.log('user is logged in');
                this.router.navigate(['pages/dashboard']);
                return true;
            } else {
                console.log('user not logged in');
                this.router.navigate(['auth/login']);
                this.isLogged = false;
            }
        });
        return this.isLogged;
    }
}
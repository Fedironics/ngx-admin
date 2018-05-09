import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user.model';
import 'rxjs/add/observable/of';

let counter = 0;

@Injectable()
export class UserService implements OnInit {
  private user: User;
  private isLogged: boolean = false;
  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        this.isLogged = true;
        this.user = new User(user.displayName, user.email, user.photoURL, user.phoneNumber, user.uid);
        console.log('user is signed in from service')
      } else {
        //TODO user is signed out
        console.log('user is signed out ');
      }
    });
    console.log('constructing user service');
  }

  ngOnInit() {
    console.log('initializing user service');

  }
  getUsers() {
    //  return Observable.of(this.users);
  }

  getUserArray() {
    // return Observable.of(this.userArray);
  }
  goToLogin() {
    //   this.router.navigate(['auth/login']);
    console.log('user logged out');
  }

  getUser(): User {
    return this.user;
  }
}

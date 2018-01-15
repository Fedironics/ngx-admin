import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user';
import 'rxjs/add/observable/of';

let counter = 0;

@Injectable()
export class UserService {
  private user: User;
  private isLogged: boolean = false;
  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    this.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        this.isLogged = true;
        this.user = new User(user.displayName, user.email, user.photoURL, user.phoneNumber, user.uid);
      } else {
        //TODO user is signed out
        console.log('user is signed out ');
      }
    });
  }
  getUsers() {
    //  return Observable.of(this.users);
  }

  getUserArray() {
    // return Observable.of(this.userArray);
  }
  goToLogin() {
    this.router.navigate(['auth/login']);
  }

  getUser(): Observable<User> {
    if (!this.isLogged) {
      this.goToLogin();
    }
    return Observable.of(this.user);
  }
}

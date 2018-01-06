/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NB_AUTH_OPTIONS_TOKEN } from '@nebular/auth/auth.options';
import { getDeepFromObject } from '@nebular/auth/helpers';

//import { NbAuthResult, NbAuthService } from '@nebular/auth/services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { User } from '../../../../models/user';


@Component({
    selector: 'ngx-login',
    providers: [AngularFireAuth],
    template: `
    <ngx-auth-block>
      <h2 class="title">Sign In</h2>
      <small class="form-text sub-title">Hello! Sign in with your username or email</small>

      <form (ngSubmit)="login()" #form="ngForm" autocomplete="nope">

        <div *ngIf="showMessages.error && errors && errors.length > 0 && !submitted"
             class="alert alert-danger" role="alert">
          <div><strong>Oh snap!</strong></div>
          <div *ngFor="let error of errors">{{ error }}</div>
        </div>

        <div *ngIf="showMessages.success && messages && messages.length > 0 && !submitted"
             class="alert alert-success" role="alert">
          <div><strong>Hooray!</strong></div>
          <div *ngFor="let message of messages">{{ message }}</div>
        </div>

        <div class="form-group">
          <label for="input-email" class="sr-only">Email address</label>
          <input name="email" [(ngModel)]="user.email" id="input-email" pattern=".+@.+\..+"
                 class="form-control" placeholder="Email address" #email="ngModel"
                 [class.form-control-danger]="email.invalid && email.touched" autofocus
                 [required]="getConfigValue('forms.validation.email.required')">
          <small class="form-text error" *ngIf="email.invalid && email.touched && email.errors?.required">
            Email is required!
          </small>
          <small class="form-text error"
                 *ngIf="email.invalid && email.touched && email.errors?.pattern">
            Email should be the real one!
          </small>
        </div>

        <div class="form-group">
          <label for="input-password" class="sr-only">Password</label>
          <input name="password" [(ngModel)]="user.password" type="password" id="input-password"
                 class="form-control" placeholder="Password" #password="ngModel"
                 [class.form-control-danger]="password.invalid && password.touched"
                 [required]="getConfigValue('forms.validation.password.required')"
                 [minlength]="getConfigValue('forms.validation.password.minLength')"
                 [maxlength]="getConfigValue('forms.validation.password.maxLength')">
          <small class="form-text error" *ngIf="password.invalid && password.touched && password.errors?.required">
            Password is required!
          </small>
          <small
            class="form-text error"
            *ngIf="password.invalid && password.touched && (password.errors?.minlength || password.errors?.maxlength)">
            Password should contains
            from {{ getConfigValue('forms.validation.password.minLength') }}
            to {{ getConfigValue('forms.validation.password.maxLength') }}
            characters
          </small>
        </div>

        <div class="form-group accept-group col-sm-12">
          <nb-checkbox name="rememberMe" [(ngModel)]="user.rememberMe">Remember me</nb-checkbox>
          <a class="forgot-password" routerLink="../request-password">Forgot Password?</a>
        </div>

        <button [disabled]="submitted || !form.valid" class="btn btn-block btn-hero-success"
                [class.btn-pulse]="submitted">
          Sign In
        </button>
      </form>

      <div class="links">
        <small class="form-text">Or connect with:</small>

        <div class="socials">
          <a (click)="loginGoogle()" class="socicon-google"></a>
          <a (click)="loginFacebook()" class="socicon-facebook"></a>
          <a (click)="loginTwitter()" class="socicon-twitter"></a>
        </div>

        <small class="form-text">
          Don't have an account? <a routerLink="../register"><strong>Sign Up</strong></a>
        </small>
      </div>
    </ngx-auth-block>
  `,
})
export class NgxLoginComponent {

    redirectDelay: number = 0;
    showMessages: any = {};
    provider: string = '';

    errors: string[] = [];
    messages: string[] = [];
    user: any = {};
    submitted: boolean = false;

    constructor(public afAuth: AngularFireAuth,
                public db: AngularFireDatabase,
                @Inject(NB_AUTH_OPTIONS_TOKEN) protected config = {},
                protected router: Router) {

        this.redirectDelay = this.getConfigValue('forms.login.redirectDelay');
        this.showMessages = this.getConfigValue('forms.login.showMessages');
        this.provider = this.getConfigValue('forms.login.provider');
    }

    login(): void {
        this.errors = this.messages = [];
        this.submitted = true;
        this.afAuth.auth.signInWithEmailAndPassword(this.user.email,this.user.password).then( result => {
            this.verifyLogin(result.user);
        }).catch( err => {
            this.messages.push(err.message);
            this.submitted = false;
        });


    }
    loginFacebook() {
        console.log('login button clicked');
        this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then( result => {
            console.log('signin successful');
            this.verifyLogin(result.user);
        }).catch( err => {
            this.errors.push(err.message);
            this.submitted = false;
        });
    }
    loginGoogle(){
        console.log('login button clicked');
        this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then( result => {
            this.verifyLogin(result.user);
        }).catch( err => {
            this.errors.push(err.message);
            this.submitted = false;
        });
    }
    loginTwitter(){
        console.log('login button clicked');
        this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider()).then( result => {
            this.verifyLogin(result.user);
        }).catch( err => {
            this.errors.push(err.message);
            this.submitted = false;
        });
    }
    verifyLogin(user) {

        const usersRef = this.db.list('users');
        var myUser = new User(user.displayName, user.email, user.photoURL, user.phoneNumber, user.uid);
        usersRef.update(user.uid, myUser).then( result => {
            setTimeout(() => {
                return this.router.navigateByUrl('');
            }, this.redirectDelay);
        }).catch( err => {
            this.errors.push(err.message);
            this.submitted = false;
        });

    }
    getConfigValue(key: string): any {
        return getDeepFromObject(this.config, key, null);
    }
}

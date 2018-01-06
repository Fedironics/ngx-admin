import { Component, Input, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormControl } from '@angular/forms'

import { Comment } from '../../../../../models/comment';
import { User } from '../../../../../models/user';

@Component({
    selector: 'ngx-add-comment',
    templateUrl: './add-comment.component.html',
    styleUrls: ['./add-comment.component.scss'],
})
export class AddCommentComponent implements OnInit {
    public comment: string = 'my comment from model';
    public commentObj: Comment;
    public user: User;

    @Input('id') id: string;

    constructor(public db: AngularFireDatabase, public afAuth: AngularFireAuth) {

    }
    submitComment(){
        var commentRef = this.db.list('blog/'+this.id+'/comments');
        console.log('blog/'+this.id+'/comments');
        this.afAuth.auth.onAuthStateChanged( user => {
            if (user) {
                console.log(user);
                this.user = new User(user.displayName,user.email,user.photoURL,user.phoneNumber, user.uid);
                this.commentObj = new Comment(this.user, this.comment, this.id);
                commentRef.push(this.commentObj).then( res => {
                    this.comment = '';
                    console.log('comment added successfully');
                });
            } else {
                //TODO user is signed out
                console.log('comment post failed user is signed out');
            }
        });
    }
    ngOnInit() {

    }

}

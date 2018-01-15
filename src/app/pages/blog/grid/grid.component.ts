import { Component, OnInit } from '@angular/core';
import { AngularFireAction, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/database';
import DataSnapshot = firebase.database.DataSnapshot;
import { Router } from '@angular/router';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { Post } from '../../../models/post';
import { User } from '../../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
    selector: 'ngx-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
    //TODO : later add subtle animation for at hover effect
    public paginator: { left: boolean, right: boolean } = { left: true, right: false };
    public posts: Observable<AngularFireAction<DataSnapshot>[]>;
    public postsRef: AngularFireList<any>;
    public user: User;
    themeSubscription: any;
    constructor(private db: AngularFireDatabase, private router: Router, private afAuth: AngularFireAuth) { }

    ngOnInit() {
        this.postsRef = this.db.list('blog');
        this.posts = this.postsRef.snapshotChanges();
        console.log(this.posts);
    }

    createPost() {
        var key = this.postsRef.push(new Post(this.user)).key;
        this.router.navigate(['pages/blog/create-post/' + key]);
    }

}

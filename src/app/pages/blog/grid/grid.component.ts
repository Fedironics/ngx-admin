import { Component, OnInit } from '@angular/core';
import { AngularFireAction, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/database';
import DataSnapshot = firebase.database.DataSnapshot;

@Component({
    selector: 'ngx-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
    //TODO : later add subtle animation for at hover effect
    public paginator: { left: boolean, right: boolean } = { left: true, right: false };
    public posts: Observable<AngularFireAction<DataSnapshot>[]>;
    themeSubscription: any;
    constructor(public db: AngularFireDatabase) { }

    ngOnInit() {
        this.posts = this.db.list('blog').snapshotChanges();
        console.log(this.posts);
    }

}

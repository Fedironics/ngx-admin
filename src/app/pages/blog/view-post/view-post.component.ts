import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Post } from '../../../models/post';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'ngx-view-post',
    templateUrl: './view-post.component.html',
    styleUrls: ['./view-post.component.scss'],
})


export class ViewPostComponent implements OnInit {
    public id: string;
    public post: Observable<Post>;
    public db: AngularFireDatabase;

    constructor(db: AngularFireDatabase, private activatedRoute: ActivatedRoute) {
        this.db = db;
    }

    ngOnInit() {
        //TODO : increase the number of views for this post here
        this.activatedRoute.params.map(params => params['id']).subscribe((id)=> this.id = id);
        this.post = this.db.object('blog/'+this.id).valueChanges();
    }

}

import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BlogService {
    posts : AngularFireList<any> ;
    constructor(angularFireDatabase: AngularFireDatabase) {
        this.posts = angularFireDatabase.list('blog');
    }
    getPosts() {
        return this.posts;
    }
}

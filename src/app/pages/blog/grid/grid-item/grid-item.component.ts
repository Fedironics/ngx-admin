import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Post } from '../../../../models/post';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ngx-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss'],
})
export class GridItemComponent implements OnInit {
    public posts: Observable<Post[]>;

    constructor( db: AngularFireDatabase) {

        this.posts = db.list<Post>('blog').valueChanges();
        console.log(this.posts);
    }
  ngOnInit() {
  }

}

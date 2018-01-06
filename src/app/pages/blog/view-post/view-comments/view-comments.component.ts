import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Comment } from '../../../../models/comment';

@Component({
    selector: 'ngx-view-comments',
    templateUrl: './view-comments.component.html',
    styleUrls: ['./view-comments.component.scss'],
})
export class ViewCommentsComponent implements OnInit {
    @Input('id') id: string;

    public comments: Observable<Comment[]> ;
    constructor(db: AngularFireDatabase) {
        this.comments = db.list<Comment>('blog/'+ this.id + 'comments').valueChanges();
        console.log(this.comments);
    }

    ngOnInit() {
    }

}


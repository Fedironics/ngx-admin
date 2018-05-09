import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormControl } from '@angular/forms'

import { Comment } from '../../../../models/comment.model';
import { UserService } from '../../../../@core/data/users.service';

@Component({
    selector: 'ngx-add-comment',
    templateUrl: './add-comment.component.html',
    styleUrls: ['./add-comment.component.scss'],
})
export class AddCommentComponent implements OnInit {
    public comment: string;
    public commentObj: Comment;
    public isProcessing: boolean = false;

    @Input('id') id: string;

    constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth, private userService: UserService) {

    }
    submitComment() {
        //TODO : increase the number of comments on the post here
        this.isProcessing = true;
        var commentRef = this.db.list('blog/' + this.id + '/comments');
        console.log('blog/' + this.id + '/comments');
        this.commentObj = new Comment(this.userService.getUser(), this.comment, this.id);
        console.log(this.commentObj);
        commentRef.push(this.commentObj).then(res => {
            this.comment = '';
            this.isProcessing = false;
            console.log('comment added successfully');
        });

    }
    ngOnInit() {

    }

}

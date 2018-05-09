import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Comment } from '../../../../models/comment.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from '../../../../models/user.model';

@Component({
    selector: 'ngx-view-comments',
    templateUrl: './view-comments.component.html',
    styleUrls: ['./view-comments.component.scss'],
})
export class ViewCommentsComponent implements OnInit {
    @Input('id') id: string;
    public comments: Observable<Comment[]>;

    constructor(public db: AngularFireDatabase) {
        // console.log('blog/'+this.id+'/comments');
        // this.comments = [
        //     new Comment(new User('Ekene From Comment','ekenemadunagu@yahoo.com','https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/24068276_892616910907583_8662983099272527286_n.jpg?oh=473d5e91b6f63cab7d6d0348065487d5&amp;oe=5AD7686E','08033332670','myuid'),'my Comment',this.id),
        //     new Comment(new User('Ekene From Comment','ekenemadunagu@yahoo.com','https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/24068276_892616910907583_8662983099272527286_n.jpg?oh=473d5e91b6f63cab7d6d0348065487d5&amp;oe=5AD7686E&quot','08033332670','myuid'),'my Comment',this.id),
        //     new Comment(new User('Ekene From Comment','ekenemadunagu@yahoo.com','https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/24068276_892616910907583_8662983099272527286_n.jpg?oh=473d5e91b6f63cab7d6d0348065487d5&amp;oe=5AD7686E','08033332670','myuid'),'my Comment',this.id),
        //     new Comment(new User('Ekene From Comment','ekenemadunagu@yahoo.com','https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/24068276_892616910907583_8662983099272527286_n.jpg?oh=473d5e91b6f63cab7d6d0348065487d5&amp;oe=5AD7686E&quot','08033332670','myuid'),'my Comment',this.id),
        //     new Comment(new User('Ekene From Comment','ekenemadunagu@yahoo.com','https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/24068276_892616910907583_8662983099272527286_n.jpg?oh=473d5e91b6f63cab7d6d0348065487d5&amp;oe=5AD7686E','08033332670','myuid'),'my Comment',this.id),
        //     new Comment(new User('Ekene From Comment','ekenemadunagu@yahoo.com','https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/24068276_892616910907583_8662983099272527286_n.jpg?oh=473d5e91b6f63cab7d6d0348065487d5&amp;oe=5AD7686E&quot','08033332670','myuid'),'my Comment',this.id),
        // ];
    }

    ngOnInit() {
         this.comments = this.db.list('blog/'+this.id+'/comments').valueChanges();

    }

}


import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../../../models/post.model';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
@Component({
    selector: 'ngx-grid-item',
    templateUrl: './grid-item.component.html',
    styleUrls: ['./grid-item.component.scss'],
})
export class GridItemComponent implements OnInit {
    @Input('post') post: Observable<Post>;
    @Input('id') id: string;

    constructor(public router: Router) {

    }
    ngOnInit() {
    }


    favoritePost() {

    }

    viewPost() {
        console.log(this.post);
        this.router.navigate(['pages/blog/view/' + this.id]);
    }

}

import { Component, OnInit } from '@angular/core';
import { Post } from '../../../models/post';

@Component({
  selector: 'ngx-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
public post: Post ;
  constructor() { }

  ngOnInit() {
  }

}

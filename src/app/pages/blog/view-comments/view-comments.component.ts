import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-view-comments',
  templateUrl: './view-comments.component.html',
  styleUrls: ['./view-comments.component.scss'],
})
export class ViewCommentsComponent implements OnInit {
  comments = [
    'ljljjlk',
    'mmky lj j',
    'kjljljkjklj',
];
  constructor() { }

  ngOnInit() {
  }

}

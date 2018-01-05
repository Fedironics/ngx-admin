import { Component, OnInit, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import {BlogService} from "../../../@core/data/blog.service";
import {FirebaseObjectObservable} from "angularfire2/database-deprecated";
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'ngx-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit, OnDestroy {
  public posts: Observable<any[]>;
    currentTheme: string;
    themeSubscription: any;
    constructor(private themeService: NbThemeService, private blogService: BlogService, db: AngularFireDatabase) {
        this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
            this.currentTheme = theme.name;
        });
        this.posts = db.list('blog').valueChanges();
    }


    ngOnInit() {
        //     this.posts = this.blogService.getPosts();
    }
    ngOnDestroy() {
        this.themeSubscription.unsubscribe();
    }
}

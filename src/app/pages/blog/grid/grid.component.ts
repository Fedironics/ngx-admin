import { Component, OnInit, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'ngx-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit, OnDestroy {
  public posts: Observable<any[]>;
    currentTheme: string;
    themeSubscription: any;
    constructor(private themeService: NbThemeService, db: AngularFireDatabase) {
        this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
            this.currentTheme = theme.name;
        });
        this.posts = db.list('blog').valueChanges();
    }


    ngOnInit() {

    }
    ngOnDestroy() {
        this.themeSubscription.unsubscribe();
    }
}

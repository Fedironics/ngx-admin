import { Component, OnInit, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
    selector: 'ngx-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit, OnDestroy {
    posts = [
        { title: 'something' },
        { title: 'something' },
        { title: 'something' },
        { title: 'something' },
        { title: 'something' },
        { title: 'something' },
    ];
    currentTheme: string;
    themeSubscription: any;
    constructor(private themeService: NbThemeService) {
        this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
            this.currentTheme = theme.name;
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.themeSubscription.unsubscribe();
    }
}

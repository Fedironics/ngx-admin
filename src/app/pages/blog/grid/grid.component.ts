import { Component, OnInit, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
    selector: 'ngx-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit, OnDestroy {
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

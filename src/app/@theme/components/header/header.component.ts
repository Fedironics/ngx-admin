import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { User } from '../../../models/user.model';


@Component({
    selector: 'ngx-header',
    styleUrls: ['./header.component.scss'],
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {


    @Input() position = 'normal';

    user: User;
    photoURL: string;
    displayName: string;

    userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

    constructor(private sidebarService: NbSidebarService,
        private menuService: NbMenuService,
        private userService: UserService,
        private analyticsService: AnalyticsService) {
    }

    ngOnInit() {
        this.user = this.userService.getUser();
    }

    toggleSidebar(): boolean {
        this.sidebarService.toggle(true, 'menu-sidebar');
        return false;
    }

    toggleSettings(): boolean {
        this.sidebarService.toggle(false, 'settings-sidebar');
        return false;
    }

    goToHome() {
        this.menuService.navigateHome();
    }

    startSearch() {
        this.analyticsService.trackEvent('startSearch');
    }
}

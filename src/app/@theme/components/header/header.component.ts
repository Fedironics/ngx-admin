import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
    selector: 'ngx-header',
    providers: [AngularFireAuth],
    styleUrls: ['./header.component.scss'],
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {


    @Input() position = 'normal';

    user: any;
    photoURL: string ;
    displayName: string;

    userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

    constructor(private sidebarService: NbSidebarService,
                private menuService: NbMenuService,
                private userService: UserService,
                public afAuth: AngularFireAuth,
                private analyticsService: AnalyticsService) {
    }

    ngOnInit() {
     this.afAuth.auth.onAuthStateChanged( user => {
            if (user) {
                console.log(user);
                this.user = user;
                this.photoURL = user.photoURL;
                this.displayName = user.displayName;

                // ...
            } else {
             //TODO user is signed out
            }
        });

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

import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { BlogModule } from './blog/blog.module';
import { ProfileComponent } from './profile/profile.component';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
      BlogModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    ProfileComponent,
  ],
})
export class PagesModule {
}

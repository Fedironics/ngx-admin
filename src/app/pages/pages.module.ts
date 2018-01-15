import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { BlogModule } from './blog/blog.module';
import { ProfileComponent } from './profile/profile.component';
import { FotaModule } from './fota/fota.module';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
      BlogModule,
      FotaModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    ProfileComponent,
  ],
})
export class PagesModule {
}

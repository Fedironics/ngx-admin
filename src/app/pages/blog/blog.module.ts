import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BlogComponent} from "./blog.component";
import {ThemeModule} from "../../@theme/theme.module";

@NgModule({
  imports: [
    CommonModule,
      ThemeModule,
  ],
  declarations: [BlogComponent,],
})
export class BlogModule { }

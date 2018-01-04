import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BlogComponent} from './blog.component';
import {ThemeModule} from '../../@theme/theme.module';
import { CreatePostComponent } from './create-post/create-post.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { ViewCommentsComponent } from './view-comments/view-comments.component';

@NgModule({
  imports: [
    CommonModule,
      ThemeModule,
  ],
  declarations: [ BlogComponent, CreatePostComponent, ViewPostComponent, ViewCommentsComponent ],
})
export class BlogModule { }

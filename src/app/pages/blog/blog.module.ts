import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BlogComponent} from './blog.component';
import {ThemeModule} from '../../@theme/theme.module';
import { CreatePostComponent } from './create-post/create-post.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { ViewCommentsComponent } from './view-comments/view-comments.component';
import { AddCommentComponent } from './view-comments/add-comment/add-comment.component';
import {BlogRoutingModule} from './blog-routing.module';
import { GridComponent } from './grid/grid.component';
import { BlogService } from '../../@core/data/blog.service';

@NgModule({
    imports: [
        CommonModule,
        ThemeModule,
        BlogRoutingModule,
    ],
    providers: [ BlogService ],
    declarations: [ BlogComponent, CreatePostComponent, ViewPostComponent,
        ViewCommentsComponent, AddCommentComponent, GridComponent ],
})
export class BlogModule { }

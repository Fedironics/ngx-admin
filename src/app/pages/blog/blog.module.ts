import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { ThemeModule } from '../../@theme/theme.module';
import { CreatePostComponent } from './create-post/create-post.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { ViewCommentsComponent } from './view-post/view-comments/view-comments.component';
import { AddCommentComponent } from './view-post/view-comments/add-comment/add-comment.component';
import { BlogRoutingModule } from './blog-routing.module';
import { GridComponent } from './grid/grid.component';
import { GridItemComponent } from './grid/grid-item/grid-item.component';

@NgModule({
    imports: [
        CommonModule,
        ThemeModule,
        BlogRoutingModule,
    ],
    declarations: [ BlogComponent, CreatePostComponent, ViewPostComponent,
        ViewCommentsComponent, AddCommentComponent, GridComponent, GridItemComponent ],
})
export class BlogModule { }

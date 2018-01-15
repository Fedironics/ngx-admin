import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { ThemeModule } from '../../@theme/theme.module';
import { CreatePostComponent } from './create-post/create-post.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { ViewCommentsComponent } from './view-post/view-comments/view-comments.component';
import { AddCommentComponent } from './view-post/add-comment/add-comment.component';
import { BlogRoutingModule } from './blog-routing.module';
import { GridComponent } from './grid/grid.component';
import { GridItemComponent } from './grid/grid-item/grid-item.component';
import { FormsModule } from '@angular/forms';
import { UploadService } from '../../@core/data/upload.service';

@NgModule({
    imports: [
        CommonModule,
        ThemeModule,
        BlogRoutingModule,
        FormsModule,
    ],

  providers: [UploadService],
    declarations: [ BlogComponent, CreatePostComponent, ViewPostComponent,
        ViewCommentsComponent, AddCommentComponent, GridComponent, GridItemComponent ],
})
export class BlogModule { }

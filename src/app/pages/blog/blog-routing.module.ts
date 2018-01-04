import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogComponent} from './blog.component';
import {CreatePostComponent} from './create-post/create-post.component';
import {ViewPostComponent} from './view-post/view-post.component';
import {GridComponent} from './grid/grid.component';


const routes: Routes = [{
    path: '',
    component: BlogComponent,
    children: [{
        path: 'create-post',
        component: CreatePostComponent,
    }, {
        path: 'view/:id',
        component: ViewPostComponent,
    }, {
        path: 'grid',
        component: GridComponent,
    }, {
        path: '',
        component: GridComponent,
    },
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BlogRoutingModule { }

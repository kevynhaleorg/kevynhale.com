import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogSingleComponent } from './pages/blog/blog-single/blog-single.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path:'home',
    component: HomeComponent,
    data: { state: 'home'}
    
  },
  {
    path:'blog',
    component: BlogComponent,
    data: { state: 'blog'},
  },
  {
    path: 'blog/:id',
    component: BlogSingleComponent,
    data: {state: 'blogSingle'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

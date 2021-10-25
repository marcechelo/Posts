import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LocalPostComponent } from './local-post/local-post.component';
import { RemotePostComponent } from './remote-post/remote-post.component';
import { PlusPostComponent } from './plus-post/plus-post.component';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'home/local'
  },
  {
    path:'home',
    pathMatch: 'full',
    redirectTo: 'home/local'
  },
  {
    path:'home',
    component: HomeComponent,
    children:[
      {path: 'local', component: LocalPostComponent},
      {path: 'remote', component: RemotePostComponent},
      {path: 'plus', component: PlusPostComponent},
    ]
  },
  {
    path:'**',
    pathMatch: 'full',
    redirectTo: 'home/local'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

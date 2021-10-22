import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LocalPostComponent } from './local-post/local-post.component';
import { RemotePostComponent } from './remote-post/remote-post.component';

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
      /*{path: 'upload_products', component: UploadProductsComponent},
      {path: 'settings', component: SettingsComponent},
      {path: 'historico', component: HistoricoComponent},*/
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [

  {path : '', redirectTo : 'login', pathMatch : 'full'},
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then((m) => m.LoginModule) },
  { path: 'forgotPassword', loadChildren: () => import('./auth/forgotpassword/forgotpassword.module').then((m) => m.ForgotpasswordModule) },
  { path: 'sclList', loadChildren: () => import('./auth/scllist/scllist.module').then((m) => m.ScllistModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

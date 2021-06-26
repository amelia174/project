import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetComponent } from './auth/forget/forget.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrasiComponent } from './auth/registrasi/registrasi.component';


const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'registrasi',
    component:RegistrasiComponent
  },
  {
    path:'forget',
    component:ForgetComponent
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/login'
  },
  {
    path:'admin',
    loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

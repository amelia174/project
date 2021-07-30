import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { BarangComponent } from './barang/barang.component';
import { HomeComponent } from './home/home.component';
import { PencarianComponent } from './pencarian/pencarian.component';
import { MaterialDesign } from '../material/material';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { InfoComponent } from './info/info.component';
import { BarangDetailComponent } from './barang-detail/barang-detail.component';
import { PicUploaderComponent } from './pic-uploader/pic-uploader.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
    children:[
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'barang',
        component:BarangComponent
      },
      {
        path:'info',
        component:InfoComponent
      },
      {
        path:'pencarian',
        component:PencarianComponent
      },
      {
        path:'',
        pathMatch:'full',
        redirectTo:'/admin/home'
      }
    ]
  }
]

@NgModule({
  declarations: [
    AdminComponent,
    BarangComponent,
    HomeComponent,
    PencarianComponent,
    InfoComponent,
    BarangDetailComponent,
    PicUploaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign,
    MatIconModule,
    FormsModule
  ]
})
export class AdminModule { }

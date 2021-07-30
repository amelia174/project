import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatCardMdImage } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { BarangDetailComponent } from '../barang-detail/barang-detail.component';
import { PicUploaderComponent } from '../pic-uploader/pic-uploader.component';



@Component({
  selector: 'app-barang',
  templateUrl: './barang.component.html',
  styleUrls: ['./barang.component.scss']
})
export class BarangComponent implements OnInit {

  title:any;
  product:any={};
  products:any=[];
  userData:any={};
  


  constructor(
    public dialog:MatDialog,
    public api:ApiService,
    public db: AngularFirestore,
    public auth: AngularFireAuth
    
  ) {   }

  ngOnInit(): void { 
    this.title='Barang';
    this.auth.user.subscribe(user=>{
    this.userData = user;
    this.getProducts();
  });
  }

  loading: boolean | undefined;
  getProducts()
  {
    this.loading=true;
    this.db.collection('products', ref=>{
      return ref.where('uid','==', this.userData.uid);
    }).valueChanges({idField : 'id'}).subscribe(res=>{
      console.log(res);
      this.products=res;
      this.loading=false;
    },err=>{
      this.loading=false;
    })
  }

  
  barangDetail(data: any, idx: any)
  {
    let dialog=this.dialog.open(BarangDetailComponent,{
      width:'400px',
      data: data
    });
    dialog.afterClosed().subscribe(res=>{
      return;
    })
  }

  
  loadingDelete:any={};
  deleteProduct(id: any, idx: any)
  {
    var conf=confirm('Delete Item?');
    if (conf)
    {
      this.db.collection('products').doc(id).delete().then(res=>{
        this.products.splice(idx,1);
        this.loadingDelete[idx]=false;
      }).catch(err=>{
        this.loadingDelete[idx]=false;
        alert('Tidak dapat menghapus data');
      });
    }
  }

} 
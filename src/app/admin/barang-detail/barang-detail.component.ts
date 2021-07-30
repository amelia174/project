import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-barang-detail',
  templateUrl: './barang-detail.component.html',
  styleUrls: ['./barang-detail.component.scss']
})
export class BarangDetailComponent implements OnInit {

  userData: any = {};

  constructor(
    public dialogRef:MatDialogRef<BarangDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,  
    public dialog:MatDialog,
    public api:ApiService,
     public db: AngularFirestore,
    public auth: AngularFireAuth

  ) { }

  ngOnInit(): void {
    this.auth.user.subscribe((res: any)=>{
      this.userData = res;
    })
  }

  loading:boolean | undefined;
  saveData()
  {
      this.loading=true; 
      if(this.data.id == undefined)
      {
        //simpan ke firebase
        let doc = new Date().getTime().toString();
        this.data.uid = this.userData.uid;
        this.db.collection('products').doc(doc).set(this.data).then(res=>{
          this.dialogRef.close(this.data);
          this.loading=false;
        }).catch(er=>{
          console.log(er);
          this.loading=false;
          alert("Tidak dapat menyimpan data")
        })
      }else{
        this.db.collection('products').doc(this.data.id).update(this.data).then(res=>{
          this.dialogRef.close(this.data);
          this.loading=false;
        }).catch(er=>{
          console.log(er);
          this.loading=false;
          alert("Tidak dapat mengupdate data")
      })
    }
   }
  }
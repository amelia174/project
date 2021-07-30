import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-pic-uploader',
  templateUrl: './pic-uploader.component.html',
  styleUrls: ['./pic-uploader.component.scss']
})
export class PicUploaderComponent implements OnInit {

  constructor(
    public api : ApiService,
    public dialogRef:MatDialogRef<PicUploaderComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData:any
  ) { }

  ngOnInit(): void {
    console.log(this.dialogData);
  }
  selectedImage: any;
  onImageChange(event: any) {
   if(event.target.files.length > 0) {
       this.selectedImage=event.target.files[0];
       console.log(this.selectedImage);        
   }
  }
  loadingUpload: boolean | undefined;
  uploadFile(){
    let input = new FormData();
    input.append('file', this.selectedImage);
    this.loadingUpload = true;
    this.api.upload(input).subscribe((data: any)=>{
      this.updateProduct(data);
      console.log(data);
    }, (error: any)=>{
      this.loadingUpload = false;
      alert('Gagal mengunggah foto');
    });
  }
  updateProduct(data: any)
 {
   if(data.status == true)
   {
     //lakukan update data produk disini
     this.updateImage(data);
     //
     alert('Foto berhasil diunggah');
     this.loadingUpload= false;
     //tambahan
     this.dialogRef.close();
   }else{
     alert(data.message);
   }
 }
 updateImage(data:any){
  //this.api.put('books/'+this.dialogData.id, {url: data.url}).subscribe(res=>{
    //console.log(res);
  // })
 }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-registrasi',
  templateUrl: './registrasi.component.html',
  styleUrls: ['./registrasi.component.scss']
})
export class RegistrasiComponent implements OnInit {

  constructor(
    //public api: ApiService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }
  user:any={};
  hide: boolean=true;

  //email = new FormControl('', [Validators.required, Validators.email]);
  //password=new FormControl('', [Validators.minLength(6), Validators.required]);
  
  loading:boolean | undefined;
  register()
  {
    //this.loading=true;
    //this.api.register(this.user.email, this.user.password).subscribe(res=>{
      //console.log(res);
      //this.loading=false;
      //alert('Registrasi berhasil');
      //this.router.navigate(['/login']);
    //},err=>{
      //this.loading=false;
      //alert('Tidak dapat mendaftar');
    //})
  }
}

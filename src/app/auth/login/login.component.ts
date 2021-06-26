import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { ApiService } from 'src/app/services/api.service';
//import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:any={};
  constructor(
    //public api:ApiService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }
  hide:boolean=true
  //email = new FormControl('', [Validators.required, Validators.email]);
  //password = new FormControl('', [Validators.required]);
  
  loading:boolean | undefined;
  login()
  {
    this.loading=true;
    //this.api.login(this.user.email, this.user.password).subscribe(res=>
      //{
      //localStorage.setItem('appToken',JSON.stringify(res));
      this.router.navigate(['admin/home']);
    //},()=>{
      this.loading=false;
      alert('Tidak dapat login');
    //})
  }
}


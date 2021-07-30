import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:any={};
  stateCtrl: FormControl | undefined
  
  
  constructor(
    public api:ApiService,
    public router: Router,
    public auth: AngularFireAuth
    

  ) { }

  ngOnInit(): void {
  }
  
  hide:boolean=true
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  
  loading:boolean | undefined;
  login(user: any)
  {
    this.loading=true;
    this.auth.signInWithEmailAndPassword (user.email, user.password).then(res=> {
        this.loading=false;
        alert('Login berhasil');
        this.router.navigate(['admin/home']);
      }) .catch (err=>{
        this.loading=false;
        alert('Tidak dapat mendaftar');
      })
    }
}
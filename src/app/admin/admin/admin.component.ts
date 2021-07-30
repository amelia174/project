import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  
  mode:string='side';


  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
    this.checkLogin();
  }

  checkLogin()
  {
    //this.api.get('bookswithauth/status').subscribe(res=>{
      //is logged in
      //return;
    //},error=>{
      // not logged in
      //this.router.navigate(['/login']);
    //})
  }

  logout()
  {
    let conf=confirm('Keluar Aplikasi?');
    if(conf)
    {
      localStorage.removeItem('appToken');
      //window.location.reload();
      this.router.navigate(['/login']);
    }
  }

}

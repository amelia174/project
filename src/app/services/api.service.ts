import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  http: any;

  constructor() { }

  upload(file: any)
  {
    return this.http.post(file);
  }
 
}

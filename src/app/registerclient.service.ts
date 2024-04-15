import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterclientService {
baseUrl:string="http://localhost:3000/users";


  constructor(public http:HttpClient)     {
   
  }
  addClient(Client:any):Observable<any>{
    
      return this.http.post(this.baseUrl,Client);
  }
}

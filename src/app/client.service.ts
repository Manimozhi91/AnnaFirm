import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseUrl:string="http://localhost:3000/users";

  constructor(public http:HttpClient) {
   
   }
   loadAllUsers():Observable<Client[]>{
    return this.http.get<Client[]>(this.baseUrl);
  }
  deleteUser(id:any):Observable<any>{
    return this.http.delete(this.baseUrl+"/"+id);

}
}


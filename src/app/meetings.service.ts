import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Meetings } from 'src/model/meetings';
@Injectable({
  providedIn: 'root'
})
export class MeetingsService {
    baseUrl:string="http://localhost:3000/meetings";
  
    constructor(public http:HttpClient) { 
    //   addMeeting(Meetings:any):Observable<any>{
      
    //     return this.http.post(this.baseUrl,Meetings);
    // }
    }
    viewAllMeetings():Observable<Meetings[]>{
     return this.http.get<Meetings[]>(this.baseUrl);
  
    }
    deleteMeeting(id:any):Observable<any>{
      return this.http.delete(this.baseUrl+"/"+id);
  
  }
  addMeetings(meetings:any):Observable<any>{
    
    return this.http.post(this.baseUrl,meetings);
}
 }

import { Component, OnInit } from '@angular/core';
import { Meetings } from 'src/model/meetings';
import { MeetingsService } from '../meetings.service';

@Component({
  selector: 'app-viewmeetings',
  templateUrl: './viewmeetings.component.html',
  styleUrls: ['./viewmeetings.component.css']
})
export class ViewmeetingsComponent implements OnInit{
  meetings: Array<Meetings> = [];

  constructor(public meetingsService: MeetingsService) { }
  ngOnInit(): void {
    this.viewAllMeetings();
  }
  viewAllMeetings():void{
    this.meetingsService.viewAllMeetings().subscribe({
      next: (data: any) => {
      this.meetings = data;
    
    },
    error: (error: any) => {
      console.log(error);
    
    },
    complete: () => { console.log("Load All Scheduled Meetings") ;
    }})
   ;
 
  }
  deleteUser(id: any): void {
    this.meetingsService.deleteMeeting(id).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (error: any) => {
        console.error(error);

      },
      complete: () => {
        this.viewAllMeetings();
      }


    });
  }
}
//   constructor(public meetingService:MeetingService){}
//   meetings:Array<Meetings>=[];
//   ngOnInit(): void {
//     this.viewAllMeetings();
//   }
//    viewAllMeetings():void{
//    this.meetingService.viewAllMeetings().subscribe({
//  next: (data: any) => {
//   this.meetings = data;

// },
// error: (error: any) => {

// },
// complete: () => { console.log("Load All Scheduled Meetings") ;
// }

//   });

// }



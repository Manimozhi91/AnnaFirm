import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MeetingsService } from '../meetings.service';


@Component({
  selector: 'app-addmeeting',
  templateUrl: './addmeeting.component.html',
  styleUrls: ['./addmeeting.component.css']
})
export class AddmeetingComponent implements OnInit{
  
  constructor(public addmeetingService:MeetingsService){}

    meetingRef  = new FormGroup({
    meetingTopic:new FormControl(),
    noOfParticipants:new FormControl(),
      meetingDate:new FormControl(),
      meetingTime :new FormControl()
   });

   addMeetings():void{
        let meetings=this.meetingRef?.value;
        console.log(meetings);
        this.addmeetingService.addMeetings(meetings).subscribe({
          next:(data:any)=>{console.log(data)},
          error:(error:any)=>{
            console.error(error);
          },
          complete:()=>{console.log("Meeting Scheduled successfully")
          }

 
})
this.meetingRef?.reset();

   }
 
  startDate:Date | undefined;


  ngOnInit() {
    this.startDate= new Date();
    this.meetingRef;

}
onReset() {
  this.meetingRef?.reset();
}
}

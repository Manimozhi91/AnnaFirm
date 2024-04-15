import { Time } from "@angular/common";

export class Meetings{
    constructor(  public id:number, 
     public meetingTopic:string,
     public noOfParticipants:number, 
      public meetingDate:Date, 
      public meetingTime:Time 
     ){

     }
 }

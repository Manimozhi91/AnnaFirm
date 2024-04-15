import { Component } from '@angular/core';
import { MeetingsService } from '../meetings.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent {
  constructor(public router:Router){}
}




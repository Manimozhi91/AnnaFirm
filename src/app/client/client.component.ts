import { Component } from '@angular/core';
import { Client } from 'src/model/client';
import { ClientService } from '../client.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  
  client: Array<Client> = [];
  // userRef=new FormGroup({
  //   id:new FormControl(),
  //  username:new FormControl(),
  //  fullName:new FormControl(),
  //  address:new FormControl(),
  //  img: new FormControl(),
  //  password:new FormControl(),
  //   contact :new FormControl()


  //   });
  constructor(public clientService: ClientService) { }
  ngOnInit(): void {
    this.loadAllUsers();
  }
  loadAllUsers(): void {
    this.clientService.loadAllUsers().subscribe({
      next: (data: any) => {
        this.client = data;

      },
      error: (error: any) => {

      },
      complete: () => { console.log("Load All Client Details") }


    });
  }
  deleteUser(id: any): void {
    this.clientService.deleteUser(id).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (error: any) => {
        console.error(error);

      },
      complete: () => {
        this.loadAllUsers();
      }


    });

  }
  updateUser(client: any): void {
//this.userRef.get("username")?.setValue(client.username);    
  
  }

}

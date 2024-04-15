import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterclientService } from '../registerclient.service';

@Component({
  selector: 'app-registerclient',
  templateUrl: './registerclient.component.html',
  styleUrls: ['./registerclient.component.css']
})
export class RegisterclientComponent implements OnInit {
[x: string]: any;
 
    constructor(public registerClient:RegisterclientService,
      private formBuilder: FormBuilder,
      private router: Router,
  ){}
    logout(){
      this.router.navigate(["login"]);
  
    }
    registerForm!: FormGroup;
    loading = false;
    submitted = false;
    arraydata:FormData[]=[];
  
  
    
  
    ngOnInit() {
       
        this.registerForm = this.formBuilder.group({
          
          username:['', Validators.required],
  
            fullName: ['', Validators.required],
            address: ['', Validators.required],
  
            emailid: ['', [Validators.required, Validators.email]],
      
            password: ['', [Validators.required, Validators.minLength(6)]],
            img:['',Validators.required],
            contact: ['', [Validators.required, Validators.minLength(10)]],
  
            
        }
      
       
    )}
  
  
  get f() {     
     return this.registerForm?.controls; 
     }
     addclient():void{
      let client = this.registerForm?.value;
      this.registerClient.addClient(client).subscribe({
        next:(data:any)=>{console.log(data)},
        error:(error:any)=>{
          console.error(error);
        },
        complete:()=>{console.log("Client Registered successfully")
        alert("Client Registered successfully!!");}

       
     })
     this.registerForm?.reset();

    }
 
     onReset() {
        this.submitted = false;
        this.registerForm?.reset();
      }
}

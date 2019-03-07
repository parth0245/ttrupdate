import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { AllServiceService } from '../services/all-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: string;
  email: string;
  mobile: string;
  password: string;

  constructor(public service:AllServiceService) { }

  ngOnInit() {

  }
  register(form) {
    
    this.service.registerUser(this.email,this.name,this.mobile,this.password).subscribe(data=>{
      console.log(data);  
    });

    console.log(form.valid);
    console.log(this.name, this.email, this.mobile, this.password);

  }

}

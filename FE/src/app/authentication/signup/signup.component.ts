import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from "../auth.service";  

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  Loading = false;

  constructor(public authService: AuthService){}  

  onSignup(form: NgForm){  
    if(form.invalid){  
      return;  
    }  
    this.authService.CreateAdmin(form.value.email, form.value.password);  
  }  

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    username:new FormControl(null,Validators.required),
    password:new FormControl(null,Validators.required),
    cpass:new FormControl(null,Validators.required)
  })

  constructor(private _router:Router, private dataStorageService: DataStorageService) { 
    email:new FormControl
   }

  ngOnInit() {
  }

  moveToLogin() {
    this._router.navigate(['/login']);
  }

  register() {
    if(!this.registerForm.valid || (this.registerForm.controls.password.value != this.registerForm.controls.cpass.value)){
      console.log('Invalid Form'); return ;
    } else {
        this.dataStorageService.storeUser();
    }

    //console.log(JSON.stringify(this.registerForm.value));
  }
}

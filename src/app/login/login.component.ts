import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
users = [];

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, Validators.required)
  });

  constructor(private _router: Router, private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
  }

  moveToRegister() {
    this._router.navigate(['/register']);
  }

  login() {
    if(!this.loginForm.valid) {
      console.log('Invlaid!');
      return;
    } else {
        this.dataStorageService.storeUser();
    }

    console.log(JSON.stringify(this.loginForm.value));
  }

}

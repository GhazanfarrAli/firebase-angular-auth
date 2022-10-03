import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // @ts-ignore
  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initializeLoginForm();
  }
  initializeLoginForm = ()=>{
    this.loginForm = this.formBuilder.group({
      email: ["",[Validators.email, Validators.required]],
      password: ["", [Validators.required]]
    })
  }

}

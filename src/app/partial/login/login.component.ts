import { Component, OnInit } from '@angular/core';
import { AuthServicesService } from '../../service/auth-services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/service/utility.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  success = false;


  constructor(private api: AuthServicesService, private util: UtilityService, private router: Router, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(8), Validators.required]],
    });
  }

  ngOnInit() {  console.log('login page');}
  login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.util.showLoader();
    this.api.postLogin(this.loginForm.value).then((result: any) => {
      // console.log(result);
      this.util.hideLoader();
      localStorage.setItem('token', result.access_token.token);
      if (localStorage.getItem('token')) {
        this.util.successToast('Your Login Was Successful');
        localStorage.setItem('user', JSON.stringify(result.user));
        this.router.navigate(['/my-account']);
      } else {
        localStorage.setItem('token', result.access_token.token);
      }
    }, (err: any) => {
      this.util.hideLoader();
      this.util.errorToast('Invalid Login Credentials');
      console.log(err);
    });
  }

}
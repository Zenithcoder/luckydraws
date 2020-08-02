import { Component, OnInit } from '@angular/core';
import { AuthServicesService } from '../../service/auth-services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilityService } from 'src/app/service/utility.service';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  success = false;
  loading = false;
  constructor(private api: AuthServicesService, private util: UtilityService, private router: Router, private spinner: NgxSpinnerService, private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      first_name: ['', [Validators.minLength(3), Validators.required]],
      last_name: ['', [Validators.minLength(3), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      phone: ['', [Validators.required, Validators.minLength(11)]],
      password: ['', [Validators.minLength(8), Validators.required]]
    });
  }

  ngOnInit() {
  }
  signup() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.spinner.show();
    this.api.postSignup(this.registerForm.value).then((result: any) => {
      //sign user in automatically
      localStorage.setItem('token', result.access_token.token);
      if (localStorage.getItem('token')) {
        this.util.successToast('Your Registration Was Successful');
        localStorage.setItem('user', JSON.stringify(result.user));
        this.router.navigate(['/profile']); // navigate user to the profile creation page
      } else {
        localStorage.setItem('token', result.access_token.token);
        localStorage.setItem('user', JSON.stringify(result.user));
        this.router.navigate(['/profile']);
      }

      this.spinner.hide();
      this.registerForm = this.formBuilder.group({
        email: null,
        password: null,
        first_name: null,
        last_name: null,
        phone: null
      });
    },
      (err: any) => {
        this.spinner.hide();
        this.util.errorToast(err.error.error);
        console.log(err);
      });
  }

}

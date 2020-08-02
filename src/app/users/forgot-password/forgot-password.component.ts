import { Component, OnInit } from '@angular/core';
import { AuthServicesService } from '../../service/auth-services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/service/utility.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  passwordForm: FormGroup;
  submitted = false;
  success = false;


  constructor(private api: AuthServicesService, private util: UtilityService, private router: Router, private formBuilder: FormBuilder) {
    this.passwordForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]]
    });
  }

  ngOnInit() { }
  resetPassword() {
    this.submitted = true;
    if (this.passwordForm.invalid) {
      return;
    }
    this.util.showLoader();
    this.api.postResetPassword(this.passwordForm.value).then((result: any) => {
      // console.log(result);
      this.util.hideLoader();
      this.util.successToast('Your Password Reset Request Was Successful, An Email has been sent to the provided email address');
    }, (err: any) => {
      this.util.hideLoader();
      this.util.errorToast('Invalid Credentials');
      console.log(err);
    });
  }

}
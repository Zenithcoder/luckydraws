import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Profile } from 'src/app/models/profile';
import { ApiServicesService } from 'src/app/service/api-services.service';
import { UtilityService } from 'src/app/service/utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  submitted = false;
  success = false;
  Profile: Profile;
  States = [];
  Cites = [];

  constructor(private formBuilder: FormBuilder, private router: Router, private api: ApiServicesService, private util: UtilityService) {
    this.profileForm = this.formBuilder.group({
      gender: ['', [Validators.required]],
      address: ['', [Validators.minLength(2), Validators.required]],
      state: ['', [Validators.required]],
      post_code: ['', [Validators.minLength(3), Validators.required]],
      avatar: ['', [Validators.required]],
      facebook: ['', [Validators.minLength(3), Validators.required]],
      twitter: ['', [Validators.minLength(3), Validators.required]],
      city: ['', [Validators.minLength(3), Validators.required]],
    });
  }

  ngOnInit() {

  }

  createProfile() {
    this.submitted = true;
    if (this.profileForm.invalid) {
      return;
    }
    this.util.showLoader();
    this.api.postProfile(this.profileForm.value).then((result: any) => {
      console.log(result);
      this.util.hideLoader();
      this.util.successToast('Profile Updated Successfully');
      this.router.navigate(['/wallet']);
      // continue with the updating of users interface and moving to the wallet funding page
    }).catch((err: any) => {
      this.util.hideLoader();
      this.util.errorToast('Error, Profile Not Updated');
      console.log(err);
    });
  }
}

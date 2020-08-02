import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.css']
})
export class TermsConditionsComponent implements OnInit {
  searchForm: FormGroup;
  submitted = false;
  success = false;
  loading = false;

  constructor(private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      q: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }
  sendMessage() {
    this.submitted = true;
    if (this.searchForm.invalid) {
      return;
    }
    this.loading = true;
  }
}

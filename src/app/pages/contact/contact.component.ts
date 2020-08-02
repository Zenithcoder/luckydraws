import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  success = false;
  loading = false;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      name: ['', [Validators.minLength(8), Validators.required]],
      message: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit() {
  }
  sendMessage() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }
    this.loading = true;
  }
}

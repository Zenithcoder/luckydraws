import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  isLoggedIn: boolean;
  constructor() {
    this.isLoggedIn = false;
  }

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.isLoggedIn = true;
    }
  }

}

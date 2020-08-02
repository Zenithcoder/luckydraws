import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/service/utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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

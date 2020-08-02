import { Component, OnInit } from '@angular/core';
import { Users } from '../../models/users';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;
  user: Users;
  constructor() {
    this.isLoggedIn = false;
  }

  ngOnInit() {
    if (localStorage.getItem('token') && localStorage.getItem('user')) {
      this.isLoggedIn = true;
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

}

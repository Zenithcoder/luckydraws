import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/service/utility.service';



@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private util: UtilityService) { }

  ngOnInit() {
    this.logout();
  }
  logout() {
    this.util.showLoader();
    // console.log(result);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    if ((localStorage.getItem('token') == null)) {
      this.util.hideLoader();
      this.router.navigate(['/']);
      return true;
    } else {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      this.util.hideLoader();
      this.router.navigate(['/']);
      return true;
    }
    return false;
  }
}

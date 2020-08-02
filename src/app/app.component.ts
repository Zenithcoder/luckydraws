import { Component } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { UtilityService } from './service/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly VAPID_PUBLIC_KEY = 'BLBx-hf2WrL2qEa0qKb-aCJbcxEvyn62GDTyyP9KTS5K7ZL0K7TfmOKSPqp8vQF0DaG8hpSBknz_x3qf5F4iEFo';
  constructor(private swPush: SwPush, private swUpdate: SwUpdate, private util: UtilityService) {
  }
  ngOnInit() {
    // this.checkNetwork();
    // window.addEventListener('online', this.checkNetwork);
    // window.addEventListener('offline', this.checkNetwork);
    // this.subToPush();
    this.checkUpdate();
  }
  checkNetwork() {
    if (navigator.onLine) {
      //(document.querySelector('body') as any).style = '';
      this.util.successToast('Yo!, It Seems You Are Connected');
    } else {
      // (document.querySelector('body') as any).style = 'filter:grayscale(1)';
      this.util.warningToast('Yo! It Seems You Have Lost Connection, Check Your Network');
    }
  }
  subToPush() {
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    }).then(sub => {
      console.log(sub);
      const message = sub.toJSON();
      this.util.successToast(`${message}`);
    }).catch(err => {
      console.error('Could not subscribe to notifications', err);
    });
  }
  checkUpdate() {
    this.swUpdate.available.subscribe(update => {
      this.util.successToast('Update Available');
      window.location.reload();
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../service/api-services.service';
import { UtilityService } from '../service/utility.service'
import { Ticket } from '../models/ticket';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  Tickets: Ticket[];
  constructor(private api: ApiServicesService, private util: UtilityService) { }

  ngOnInit() {
  }
  getTickets() {
    this.api.getTickets().then((result: any) => {
      this.Tickets = result.data;
    }).catch(err => {
      console.log(err);
    });
  }
}

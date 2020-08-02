import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { UtilityService } from 'src/app/service/utility.service';
import { ApiServicesService } from 'src/app/service/api-services.service';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {
  Games: Game[];
  constructor(private util: UtilityService, private api: ApiServicesService) { }

  ngOnInit() {
    this.loadGames();
  }
  loadGames() {
    this.util.showLoader();
    this.api.getAllGames().then((results: any) => {
      this.util.hideLoader();
      console.log(results.competitions.data);
      this.Games = results.competitions.data;
    }).catch((err: any) => {
      this.util.hideLoader();
      this.util.errorToast('Error Loading Games!');
      console.log(err);
    });
  }

}

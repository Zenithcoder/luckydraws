import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/models/game';
import { UtilityService } from 'src/app/service/utility.service';
import { ApiServicesService } from 'src/app/service/api-services.service';
@Component({
  selector: 'app-lottery',
  templateUrl: './lottery.component.html',
  styleUrls: ['./lottery.component.css']
})
export class LotteryComponent implements OnInit {
   Game: Game;
  constructor(private router: Router, private route: ActivatedRoute, private util: UtilityService, private api: ApiServicesService) { }

  ngOnInit() {
    this.gameDetails(this.route.snapshot.params.id);
  }
  gameDetails(id: string) {
    this.util.showLoader();
    this.api.getGame(id).then((res: any) => {
      this.util.hideLoader();
      console.log('getGame',res);
      this.Game = res.data;
    }).catch(err => {
      this.util.hideLoader();
      this.util.errorToast('Error Loading This Game!');
      console.log(err);
    });
  }
}
